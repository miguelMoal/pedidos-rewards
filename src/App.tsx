import { useState, useEffect } from "react";
import { MainMenu } from "./components/MainMenu";
import { NewCustomer } from "./components/NewCustomer";
import { OTPVerification } from "./components/OTPVerification";
import { RedeemOTPVerification } from "./components/RedeemOTPVerification";
import { RegisterSale } from "./components/RegisterSale";
import { Confirmation } from "./components/Confirmation";
import type { Customer, Transaction } from "./types";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { getCustomers } from "./supabase/actions/customerActions";
import { LoadingSpinner } from "./components/LoadingSpinner";

type Screen =
  | "menu"
  | "new-customer"
  | "otp-verification"
  | "redeem-otp-verification"
  | "register-sale"
  | "confirmation";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("menu");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [pendingCustomerData, setPendingCustomerData] =
    useState<Partial<Customer> | null>(null);
  const [redeemCustomer, setRedeemCustomer] = useState<Customer | null>(null);
  const [lastCustomer, setLastCustomer] = useState<Customer | null>(null);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoadingCustomers, setIsLoadingCustomers] = useState(true);
  const [verifiedPhone, setVerifiedPhone] = useState<string | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        setIsLoadingCustomers(true);
        const loadedCustomers = await getCustomers();
        setCustomers(loadedCustomers);
      } catch (error) {
        console.error("Error al cargar clientes:", error);
        toast.error("Error al cargar los clientes");
      } finally {
        setIsLoadingCustomers(false);
      }
    };

    loadCustomers();
  }, []);

  const handlePhoneSubmit = (phone: string) => {
    setPendingCustomerData({ phone });
    setCurrentScreen("otp-verification");
    toast.success("Código enviado a " + phone);
  };

  const handleOTPVerified = () => {
    // Guardar el teléfono verificado para no pedir OTP de nuevo
    if (pendingCustomerData?.phone) {
      setVerifiedPhone(pendingCustomerData.phone);
    }
    setCurrentScreen("new-customer");
  };

  const handleNewCustomer = async (customer: Customer) => {
    try {
      setCustomers([...customers, customer]);
      setLastCustomer(customer);
      setConfirmationMessage(
        `Cliente ${customer.name} registrado exitosamente`
      );
      setCurrentScreen("confirmation");
      setPendingCustomerData(null);
      toast.success("Cliente registrado correctamente");
    } catch (error) {
      console.error("Error al manejar nuevo cliente:", error);
    }
  };

  const handleRegisterSale = (
    transaction: Transaction,
    updatedCustomer: Customer
  ) => {
    // Save transaction and complete
    setTransactions([...transactions, transaction]);
    setCustomers(
      customers.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c))
    );
    setLastCustomer(updatedCustomer);
    setConfirmationMessage(`¡Compra Registrada!`);
    setCurrentScreen("confirmation");
    toast.success(`+1 visita registrada para ${updatedCustomer.name}`);
  };

  const handleRedeemRewards = (customer: Customer) => {
    // Redeem rewards now handled within RegisterSale component
    const updatedCustomer = { ...customer };
    setCustomers(
      customers.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c))
    );
    setRedeemCustomer(null);
    setLastCustomer(null);
  };

  const handleRequestRedeemOTP = (customer: Customer) => {
    // Si el cliente ya fue verificado recientemente (especialmente si es el último cliente registrado),
    // omitir el OTP y ir directo a canjear recompensas
    if (verifiedPhone && customer.phone === verifiedPhone) {
      setRedeemCustomer(customer);
      setCurrentScreen("register-sale");
      toast.success("Cliente verificado, puedes canjear recompensas");
    } else {
      setRedeemCustomer(customer);
      setCurrentScreen("redeem-otp-verification");
      toast.success("Código de verificación enviado a " + customer.phone);
    }
  };

  if (isLoadingCustomers) {
    return (
      <div className="h-screen bg-[#f8f9fa] flex items-center justify-center">
        <LoadingSpinner size={100} message="Cargando clientes..." />
      </div>
    );
  }

  return (
    <>
      {currentScreen === "menu" && (
        <MainMenu
          onNewCustomer={() => setCurrentScreen("new-customer")}
          onRegisterSale={() => setCurrentScreen("register-sale")}
        />
      )}

      {currentScreen === "new-customer" && (
        <NewCustomer
          onBack={() => {
            setPendingCustomerData(null);
            setCurrentScreen("menu");
          }}
          onPhoneSubmit={handlePhoneSubmit}
          onRegister={handleNewCustomer}
          initialPhone={pendingCustomerData?.phone}
          phoneVerified={!!pendingCustomerData?.phone}
        />
      )}

      {currentScreen === "otp-verification" && pendingCustomerData && (
        <OTPVerification
          phone={pendingCustomerData.phone || ""}
          onBack={() => {
            setPendingCustomerData(null);
            setCurrentScreen("menu");
          }}
          onVerified={handleOTPVerified}
        />
      )}

      {currentScreen === "register-sale" && (
        <RegisterSale
          key={`register-sale-${(redeemCustomer || lastCustomer)?.id || 'new'}`}
          onBack={() => {
            setRedeemCustomer(null);
            setLastCustomer(null);
            setCurrentScreen("menu");
          }}
          customers={customers}
          onRegisterSale={handleRegisterSale}
          onRedeemRewards={handleRedeemRewards}
          onRequestRedeemOTP={handleRequestRedeemOTP}
          preSelectedCustomer={redeemCustomer || lastCustomer}
          goDirectToRedeem={!!redeemCustomer}
        />
      )}

      {currentScreen === "redeem-otp-verification" && redeemCustomer && (
        <RedeemOTPVerification
          onBack={() => {
            setRedeemCustomer(null);
            setCurrentScreen("register-sale");
          }}
          onVerified={() => {
            // After verification, save the verified phone and go to register-sale with customer pre-selected and direct to redeem
            if (redeemCustomer) {
              setVerifiedPhone(redeemCustomer.phone);
            }
            setCurrentScreen("register-sale");
          }}
          customerPhone={redeemCustomer.phone}
        />
      )}

      {currentScreen === "confirmation" && (
        <Confirmation
          message={confirmationMessage}
          subtitle="¿Qué deseas hacer ahora?"
          onComplete={() => {
            setLastCustomer(null);
            setCurrentScreen("menu");
          }}
          onRegisterAnother={
            lastCustomer && lastCustomer.visits === 0
              ? () => {
                  // Para cliente nuevo, ir directo a registrar venta con el cliente pre-seleccionado
                  // El teléfono ya está verificado, así que no se pedirá OTP de nuevo si quiere canjear recompensas
                  setCurrentScreen("register-sale");
                }
              : undefined
          }
          onRedeemMore={
            lastCustomer && lastCustomer.visits > 0
              ? () => {
                  if (lastCustomer) {
                    handleRequestRedeemOTP(lastCustomer);
                  } else {
                    setCurrentScreen("register-sale");
                  }
                }
              : undefined
          }
          type={
            lastCustomer && lastCustomer.visits === 0 ? "new-customer" : "sale"
          }
        />
      )}

      <Toaster position="bottom-left" />
    </>
  );
}

export default App;

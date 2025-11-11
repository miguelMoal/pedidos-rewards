import { useState } from "react";
import { MainMenu } from "./components/MainMenu";
import { NewCustomer } from "./components/NewCustomer";
import { OTPVerification } from "./components/OTPVerification";
import { RedeemOTPVerification } from "./components/RedeemOTPVerification";
import { RegisterSale } from "./components/RegisterSale";
import { Confirmation } from "./components/Confirmation";
import type { Customer, Transaction } from "./types";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

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
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "demo1",
      phone: "5551234567",
      name: "María García",
      gender: "Femenino",
      contactChannel: "WhatsApp",
      code: "INV001",
      cardBarcode: "1234567890123",
      visits: 15,
      createdAt: new Date("2024-10-15"),
    },
    {
      id: "demo2",
      phone: "5559876543",
      name: "Carlos Rodríguez",
      gender: "Masculino",
      contactChannel: "SMS",
      code: "INV002",
      cardBarcode: "9876543210987",
      visits: 22,
      createdAt: new Date("2024-09-20"),
    },
  ]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handlePhoneSubmit = (phone: string) => {
    setPendingCustomerData({ phone });
    setCurrentScreen("otp-verification");
    toast.success("Código enviado a " + phone);
  };

  const handleOTPVerified = () => {
    setCurrentScreen("new-customer");
  };

  const handleNewCustomer = (customer: Customer) => {
    setCustomers([...customers, customer]);
    setLastCustomer(customer); // Guardar el cliente recién registrado
    setConfirmationMessage(`Cliente ${customer.name} registrado exitosamente`);
    setCurrentScreen("confirmation");
    setPendingCustomerData(null);
    toast.success("Cliente registrado correctamente");
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
    setRedeemCustomer(customer);
    setCurrentScreen("redeem-otp-verification");
    toast.success("Código de verificación enviado a " + customer.phone);
  };

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
            // After verification, go to register-sale with customer pre-selected and direct to redeem
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

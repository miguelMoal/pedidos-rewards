import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Scan,
  User,
  CreditCard,
  Gift,
  ArrowRight,
  Coffee,
  Plus,
  Minus,
} from "lucide-react";
import { NumericKeypad } from "./NumericKeypad";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Customer, Transaction } from "../types";
import image_f69f3e1f121b1ab153665276e885092f953e390c from "../assets/f69f3e1f121b1ab153665276e885092f953e390c.png";
import svgPaths from "../imports/svg-s5do7xxfe3";
import { Confirmation } from "./Confirmation";
import { LoadingSpinner } from "./LoadingSpinner";
import { toast } from "sonner";
import {
  createVisit,
  createCashbackOnly,
  getCustomerVisitsCount,
  redeemVisits,
} from "../supabase/actions/visitActions";
import {
  getCustomerByPhone,
  getCustomerByBarcode,
} from "../supabase/actions/customerActions";
import { getRedeemableProducts } from "../supabase/actions/redeemableProductsActions";
import { Switch } from "./ui/switch";

interface Reward {
  id: string;
  name: string;
  description: string;
  points: number;
  icon: any;
  image: string;
}

interface RegisterSaleProps {
  onBack: () => void;
  customers: Customer[];
  onRegisterSale: (transaction: Transaction, customer: Customer) => void;
  onRedeemRewards: (customer: Customer) => void;
  onRequestRedeemOTP?: (customer: Customer) => void;
  preSelectedCustomer?: Customer | null;
  goDirectToRedeem?: boolean;
}

type Step =
  | "identification"
  | "action-menu"
  | "redeem-rewards"
  | "register-amount";

export function RegisterSale({
  onBack,
  customers,
  onRegisterSale,
  onRedeemRewards,
  onRequestRedeemOTP,
  preSelectedCustomer,
  goDirectToRedeem,
}: RegisterSaleProps) {
  // Paso inicial: si hay cliente preseleccionado, ir al menú de acciones (o directo a canjear si goDirectToRedeem)
  const getInitialStep = (): Step => {
    if (goDirectToRedeem && preSelectedCustomer) {
      return "redeem-rewards";
    }
    if (preSelectedCustomer) {
      return "action-menu";
    }
    return "identification";
  };

  const [step, setStep] = useState<Step>(() => getInitialStep());
  const [identification, setIdentification] = useState("");
  const [amount, setAmount] = useState("");
  const [barcode, setBarcode] = useState("");
  const [activeField, setActiveField] = useState<"amount" | "barcode">(
    "amount"
  );
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    preSelectedCustomer || null
  );
  const [selectedRewards, setSelectedRewards] = useState<
    { rewardId: string; quantity: number }[]
  >([]);
  const [showRedeemConfirmation, setShowRedeemConfirmation] = useState(false);
  const [showNextActionDialog, setShowNextActionDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [identificationError, setIdentificationError] = useState<string | null>(
    null
  );
  const [isValidatingIdentification, setIsValidatingIdentification] =
    useState(false);
  const [includesCoffee, setIncludesCoffee] = useState(false); // Por defecto NO incluye café, el usuario debe activarlo
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isLoadingRewards, setIsLoadingRewards] = useState(false);

  // Cargar productos canjeables desde Supabase
  useEffect(() => {
    const loadRewards = async () => {
      setIsLoadingRewards(true);
      try {
        const products = await getRedeemableProducts();
        setRewards(products);
      } catch (error) {
        console.error("Error al cargar productos canjeables:", error);
        toast.error("Error al cargar productos canjeables");
      } finally {
        setIsLoadingRewards(false);
      }
    };

    loadRewards();
  }, []);

  // Set pre-selected customer when provided
  useEffect(() => {
    if (preSelectedCustomer) {
      setSelectedCustomer(preSelectedCustomer);
    }
  }, [preSelectedCustomer]);

  // Update step when pre-selected customer or goDirectToRedeem changes
  // Esto asegura que cuando se pasa un cliente preseleccionado, se vaya al paso correcto
  useEffect(() => {
    if (goDirectToRedeem && preSelectedCustomer) {
      // Si se debe ir directo a canjear recompensas, verificar que tenga al menos 3 visitas
      if (preSelectedCustomer.visits >= 3) {
        setStep("redeem-rewards");
      } else {
        // Si no tiene 3 visitas, ir al menú de acciones en lugar de canjear
        setStep("action-menu");
      }
    } else if (preSelectedCustomer && !goDirectToRedeem) {
      // Si hay cliente preseleccionado pero no vamos directo a canjear, ir al menú de acciones
      setStep("action-menu");
    } else if (!preSelectedCustomer) {
      // Si no hay cliente preseleccionado, ir a identificación
      setStep("identification");
    }
  }, [goDirectToRedeem, preSelectedCustomer]);

  // Validación de formato de número de teléfono
  // Formato esperado: números solamente, entre 10 y 15 dígitos (puede incluir código de país)
  const isValidPhoneNumber = (phone: string): boolean => {
    // Remover espacios, guiones y otros caracteres no numéricos
    const cleaned = phone.replace(/\D/g, "");
    // Validar que tenga entre 10 y 15 dígitos (formato internacional)
    return cleaned.length >= 10 && cleaned.length <= 15;
  };

  // Validación de código de tarjeta (barcode)
  // Formato esperado: números solamente, al menos 4 dígitos
  const isValidBarcode = (barcode: string): boolean => {
    // Remover espacios y otros caracteres no numéricos
    const cleaned = barcode.replace(/\D/g, "");
    // Validar que tenga al menos 4 dígitos
    return cleaned.length >= 4;
  };

  // Validar formato del input
  const isValidIdentificationFormat = (identification: string): boolean => {
    if (!identification || identification.trim().length === 0) {
      return false;
    }
    // Puede ser teléfono o código de tarjeta
    return isValidPhoneNumber(identification) || isValidBarcode(identification);
  };

  const handleNumberClick = (num: string) => {
    if (step === "identification") {
      setIdentification(identification + num);
      // Limpiar error al editar
      if (identificationError) {
        setIdentificationError(null);
      }
    } else if (step === "register-amount") {
      if (activeField === "amount") {
        if (num === "." && amount.includes(".")) return;
        setAmount(amount + num);
      } else if (activeField === "barcode") {
        setBarcode(barcode + num);
      }
    }
  };

  const handleClear = () => {
    if (step === "identification") {
      setIdentification("");
      setIdentificationError(null); // Limpiar error al limpiar el campo
    } else if (step === "register-amount") {
      if (activeField === "amount") setAmount("");
      else if (activeField === "barcode") setBarcode("");
    }
  };

  const handleBackspace = () => {
    if (step === "identification") {
      setIdentification(identification.slice(0, -1));
      // Limpiar error al editar
      if (identificationError) {
        setIdentificationError(null);
      }
    } else if (step === "register-amount") {
      if (activeField === "amount") setAmount(amount.slice(0, -1));
      else if (activeField === "barcode") setBarcode(barcode.slice(0, -1));
    }
  };

  const incrementQuantity = (rewardId: string) => {
    if (!selectedCustomer) return;

    const reward = rewards.find((r) => r.id === rewardId);
    if (!reward) return;

    setSelectedRewards((prev) => {
      const existing = prev.find((r) => r.rewardId === rewardId);
      const currentUsed = getTotalVisitsToRedeem();
      const remainingVisits = selectedCustomer.visits - currentUsed;

      if (remainingVisits >= reward.points) {
        if (existing) {
          return prev.map((r) =>
            r.rewardId === rewardId ? { ...r, quantity: r.quantity + 1 } : r
          );
        } else {
          return [...prev, { rewardId, quantity: 1 }];
        }
      }
      return prev;
    });
  };

  const decrementQuantity = (rewardId: string) => {
    setSelectedRewards((prev) => {
      const existing = prev.find((r) => r.rewardId === rewardId);
      if (!existing) return prev;

      if (existing.quantity === 1) {
        return prev.filter((r) => r.rewardId !== rewardId);
      } else {
        return prev.map((r) =>
          r.rewardId === rewardId ? { ...r, quantity: r.quantity - 1 } : r
        );
      }
    });
  };

  const getRewardQuantity = (rewardId: string) => {
    const reward = selectedRewards.find((r) => r.rewardId === rewardId);
    return reward?.quantity || 0;
  };

  const getTotalVisitsToRedeem = () => {
    return selectedRewards.reduce((total, { rewardId, quantity }) => {
      const reward = rewards.find((r) => r.id === rewardId);
      return total + (reward?.points || 0) * quantity;
    }, 0);
  };

  const handleConfirmRedeem = async () => {
    if (selectedCustomer && selectedRewards.length > 0) {
      setIsLoading(true);
      setLoadingMessage("Procesando canje...");

      try {
        const visitsToRedeem = getTotalVisitsToRedeem();

        // Marcar las visitas como canjeadas en la base de datos (FIFO - las más antiguas primero)
        await redeemVisits(selectedCustomer.id, visitsToRedeem);

        // Obtener el número actualizado de visitas disponibles del cliente
        const visitsCount = await getCustomerVisitsCount(selectedCustomer.id);

        // Update customer visits
        const updatedCustomer = {
          ...selectedCustomer,
          visits: visitsCount,
        };
        setSelectedCustomer(updatedCustomer);

        setIsLoading(false);

        // Show redeem confirmation dialog (Figma design)
        // No llamar onRedeemRewards aquí para evitar que se cambie la pantalla
        // Se llamará después cuando el usuario marque como canjeado
        setShowRedeemConfirmation(true);
      } catch (error) {
        setIsLoading(false);
        console.error("Error al canjear recompensas:", error);
        toast.error(
          error instanceof Error
            ? error.message
            : "Error al canjear las recompensas"
        );
      }
    }
  };

  const handleModifyRedeem = () => {
    setShowRedeemConfirmation(false);
    setStep("redeem-rewards");
  };

  const handleMarkAsRedeemed = () => {
    // Actualizar el estado del cliente en App.tsx después de que el usuario haya visto la confirmación
    if (selectedCustomer) {
      onRedeemRewards(selectedCustomer);
    }
    // Cerrar la confirmación del canje y regresar al menú principal
    setShowRedeemConfirmation(false);
    setSelectedRewards([]);
    setIdentification("");
    setSelectedCustomer(null);
    onBack(); // Regresar al menú principal
  };

  const handleNextActionRegisterSale = () => {
    setShowNextActionDialog(false);
    setSelectedRewards([]);
    setStep("register-amount");
  };

  const handleNextActionRedeemMore = () => {
    setShowNextActionDialog(false);
    setSelectedRewards([]);
    setStep("redeem-rewards");
  };

  const handleNextActionFinish = () => {
    setShowNextActionDialog(false);
    setSelectedRewards([]);
    setIdentification("");
    setSelectedCustomer(null);
    onBack(); // Volver al menú principal
  };

  const handleCompleteSale = async () => {
    if (!selectedCustomer || !amount) return;

    setIsLoading(true);
    setLoadingMessage(
      includesCoffee ? "Registrando visita..." : "Registrando cashback..."
    );

    try {
      const amountNum = parseFloat(amount);

      if (includesCoffee) {
        // Si incluye café: crear visita + cashback
        const transaction = await createVisit({
          customerId: selectedCustomer.id,
          amount: amountNum,
          points: 1, // 1 visita por compra
          ticketNumber: barcode || undefined,
        });

        // Obtener el número actualizado de visitas del cliente
        const visitsCount = await getCustomerVisitsCount(selectedCustomer.id);

        const updatedCustomer: Customer = {
          ...selectedCustomer,
          visits: visitsCount,
        };

        setIsLoading(false);
        onRegisterSale(transaction, updatedCustomer);
      } else {
        // Si NO incluye café: solo registrar cashback
        await createCashbackOnly({
          customerId: selectedCustomer.id,
          amount: amountNum,
          ticketNumber: barcode || undefined,
        });

        // Crear una transacción ficticia para mantener la compatibilidad con la UI
        const transaction: Transaction = {
          id: Date.now().toString(),
          customerId: selectedCustomer.id,
          amount: amountNum,
          points: 0,
          date: new Date(),
        };

        // No actualizamos las visitas porque no se registró una visita real
        const updatedCustomer: Customer = {
          ...selectedCustomer,
          visits: selectedCustomer.visits, // Mantener el mismo número de visitas
        };

        setIsLoading(false);
        toast.success("Cashback registrado exitosamente");
        onRegisterSale(transaction, updatedCustomer);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error al registrar:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Error al registrar la transacción"
      );
    }
  };

  const handleDemoFill = () => {
    if (customers.length > 0) {
      const demoCustomer = customers[0];
      setIdentification(demoCustomer.cardBarcode);
    }
  };

  const handleDemoFillSale = () => {
    setAmount("125.50");
    setBarcode("1234567890123");
    setActiveField("amount");
  };

  const handleBackFromRewards = () => {
    setSelectedRewards([]);
    setStep("action-menu");
  };

  const handleBackFromAmount = () => {
    setAmount("");
    setStep("action-menu");
  };

  // Función para manejar el botón "Volver" del header según el step actual
  const handleBackFromHeader = () => {
    switch (step) {
      case "identification":
        // Volver al menú principal
        onBack();
        break;
      case "action-menu":
        // Volver a identificación y limpiar cliente seleccionado
        setSelectedCustomer(null);
        setIdentification("");
        setIdentificationError(null);
        setStep("identification");
        break;
      case "redeem-rewards":
        // Volver al menú de acciones
        handleBackFromRewards();
        break;
      case "register-amount":
        // Volver al menú de acciones
        handleBackFromAmount();
        break;
      default:
        // Por defecto, volver al menú principal
        onBack();
    }
  };

  const handleContinueIdentification = async () => {
    if (!identification || identification.trim().length === 0) {
      setIdentificationError(
        "Por favor ingresa un código o número de teléfono"
      );
      return;
    }

    // Limpiar error previo
    setIdentificationError(null);

    // Validar formato
    if (!isValidIdentificationFormat(identification)) {
      setIdentificationError(
        "El formato ingresado no es válido. Ingresa un número de teléfono (10-15 dígitos) o un código de tarjeta (mínimo 4 dígitos)"
      );
      return;
    }

    setIsValidatingIdentification(true);
    setLoadingMessage("Verificando cliente...");

    try {
      let customer: Customer | null = null;

      // Limpiar el identificador (solo números)
      const cleanedIdentification = identification.replace(/\D/g, "");

      // Intentar buscar por teléfono primero (si tiene 10-15 dígitos)
      if (isValidPhoneNumber(identification)) {
        customer = await getCustomerByPhone(cleanedIdentification);
      }

      // Si no se encontró por teléfono, intentar buscar por código de tarjeta
      if (!customer && isValidBarcode(identification)) {
        customer = await getCustomerByBarcode(cleanedIdentification);
      }

      if (customer) {
        setSelectedCustomer(customer);
        setIdentificationError(null);
        setStep("action-menu");
        toast.success(`Cliente encontrado: ${customer.name}`);
      } else {
        setIdentificationError(
          "Cliente no encontrado. Verifica el código o teléfono ingresado"
        );
        setSelectedCustomer(null);
      }
    } catch (error) {
      console.error("Error al buscar cliente:", error);
      setIdentificationError(
        error instanceof Error
          ? error.message
          : "Error al verificar el cliente. Por favor intenta de nuevo"
      );
      setSelectedCustomer(null);
    } finally {
      setIsValidatingIdentification(false);
      setLoadingMessage("");
    }
  };

  const handleGoToRedeem = () => {
    // No permitir canjear si el cliente tiene menos de 3 visitas
    if (!selectedCustomer || selectedCustomer.visits < 3) {
      toast.error(
        `Necesitas al menos 3 visitas para canjear recompensas. Tienes ${
          selectedCustomer?.visits || 0
        } visita${selectedCustomer?.visits !== 1 ? "s" : ""}`
      );
      return;
    }

    if (onRequestRedeemOTP && selectedCustomer) {
      onRequestRedeemOTP(selectedCustomer);
    } else {
      setStep("redeem-rewards");
    }
  };

  const handleGoToRegister = () => {
    setStep("register-amount");
  };

  return (
    <div className="h-screen bg-[#f8f9fa] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={handleBackFromHeader}
            className="flex items-center gap-2 text-[#101828] hover:text-[#046741] transition-colors active:scale-[0.98]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={image_f69f3e1f121b1ab153665276e885092f953e390c}
              alt="Rewards FA Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-[#101828] leading-tight">Puesto Rewards</h1>
              <p className="text-xs text-[#4a5565]">
                {step === "identification" && "Identificar Cliente"}
                {step === "action-menu" && "Menú de Acciones"}
                {step === "redeem-rewards" && "Canjear Recompensas"}
                {step === "register-amount" && "Registrar Visita"}
              </p>
            </div>
          </div>
          {step === "identification" && (
            <button
              onClick={handleDemoFill}
              className="text-sm text-[#046741] hover:underline"
            >
              Demo
            </button>
          )}
          {step === "register-amount" && (
            <button
              onClick={handleDemoFillSale}
              className="text-sm text-[#046741] hover:underline"
            >
              Demo
            </button>
          )}
          {step !== "identification" && step !== "register-amount" && (
            <div className="w-16"></div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full p-[24px]">
          {/* Step 1: Identification */}
          {step === "identification" && (
            <div className="grid grid-cols-12 gap-3 h-full">
              <div className="col-span-7 flex flex-col items-center justify-center">
                <div className="w-full max-w-lg">
                  <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm text-center p-[24px]">
                    <button
                      onClick={() => {
                        /* Trigger scan */
                      }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#046741]/10 to-[#046741]/5 mb-4 border border-[#046741]/20 hover:border-[#046741]/40 hover:bg-[#046741]/10 transition-all cursor-pointer group active:scale-[0.98]"
                    >
                      <Scan className="w-8 h-8 text-[#046741] group-hover:scale-110 transition-transform" />
                    </button>
                    <h3 className="text-[#101828] mb-2">
                      Identifica tu cuenta
                    </h3>
                    <p className="text-[#4a5565] mb-4">
                      Escanea tu tarjeta o ingresa tu número de teléfono
                    </p>

                    <div className="bg-gray-50 rounded-[14px] p-4 border border-gray-200 mb-4">
                      <p className="text-sm text-[#4a5565] mb-2">
                        Código / Teléfono
                      </p>
                      <p className="text-2xl text-[#101828] tracking-wide min-h-[36px]">
                        {identification || "_______________"}
                      </p>
                    </div>

                    <button
                      onClick={handleContinueIdentification}
                      disabled={
                        !identification ||
                        identification.trim().length === 0 ||
                        isValidatingIdentification ||
                        isLoading
                      }
                      className={`w-full h-12 rounded-[14px] transition-all flex items-center justify-center gap-2 ${
                        identification &&
                        identification.trim().length > 0 &&
                        !isValidatingIdentification &&
                        !isLoading
                          ? "bg-[#046741] hover:bg-[#035230] text-white shadow-lg hover:shadow-xl active:scale-[0.98]"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {isValidatingIdentification || isLoading ? (
                        <div className="w-6 h-6">
                          <LoadingSpinner size={24} />
                        </div>
                      ) : (
                        <>
                          <span>Continuar</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {identificationError && (
                    <div className="mt-4 bg-red-50 border-2 border-red-200 rounded-[14px] p-4 text-center">
                      <p className="text-red-900 font-medium">Error</p>
                      <p className="text-sm text-red-700 mt-1">
                        {identificationError}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-5 bg-white rounded-[16px] p-4 border border-gray-100 shadow-sm flex flex-col overflow-hidden">
                <div className="bg-gray-100 rounded-[14px] mb-3 flex-shrink-0 p-[24px]">
                  <p className="text-xs text-[#4a5565] mb-0.5">Ingresando:</p>
                  <p className="text-sm text-[#101828]">Código o Teléfono</p>
                </div>

                <div className="flex-1 min-h-0 flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    <NumericKeypad
                      onNumberClick={handleNumberClick}
                      onClear={handleClear}
                      onBackspace={handleBackspace}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Action Menu */}
          {step === "action-menu" && selectedCustomer && (
            <div className="h-full flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-5xl">
                {/* Welcome Message with Customer Info */}
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#046741]/10 to-[#046741]/5 mb-3 border-2 border-[#046741]/20">
                    <User className="w-8 h-8 text-[#046741]" />
                  </div>
                  <h2 className="text-[#101828] text-xl mb-2 font-bold">
                    ¡Hola, {selectedCustomer.name}!
                  </h2>
                  <p className="text-[#4a5565] text-base mb-3">
                    ¿Qué deseas hacer hoy?
                  </p>

                  <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2 border border-gray-200">
                    <Gift className="w-5 h-5 text-[#046741]" />
                    <p className="text-sm text-[#046741]">
                      Tienes {selectedCustomer.visits} visitas acumuladas
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Registrar Visita */}
                  <button
                    onClick={handleGoToRegister}
                    className="bg-white rounded-2xl p-12 transition-all hover:shadow-xl hover:-translate-y-1 border-2 border-gray-100 group relative overflow-hidden active:scale-[0.98]"
                  >
                    {/* Decorative background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#046741]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative flex flex-col items-center gap-6">
                      <div className="bg-gradient-to-br from-[#046741] to-[#035230] rounded-2xl p-5 shadow-lg group-hover:scale-110 transition-transform">
                        <CreditCard className="w-12 h-12 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-[#101828] text-[17px] mb-1">
                          Registrar Visita
                        </p>
                        <p className="text-xs text-[#4a5565]">
                          Acumula visitas con cada visita
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Canjear Recompensas */}
                  <button
                    onClick={handleGoToRedeem}
                    disabled={!selectedCustomer || selectedCustomer.visits < 3}
                    className={`rounded-2xl p-12 transition-all border-2 group relative overflow-hidden ${
                      selectedCustomer && selectedCustomer.visits >= 3
                        ? "bg-white hover:shadow-xl hover:-translate-y-1 border-gray-100 active:scale-[0.98] cursor-pointer"
                        : "bg-gray-100 border-gray-200 cursor-not-allowed opacity-60"
                    }`}
                  >
                    {/* Decorative background */}
                    {selectedCustomer && selectedCustomer.visits >= 3 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#046741]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    )}

                    <div className="relative flex flex-col items-center gap-6">
                      <div
                        className={`rounded-2xl p-5 shadow-lg transition-transform ${
                          selectedCustomer && selectedCustomer.visits >= 3
                            ? "bg-gradient-to-br from-[#046741] to-[#035230] group-hover:scale-110"
                            : "bg-gray-300"
                        }`}
                      >
                        <Gift
                          className={`w-12 h-12 ${
                            selectedCustomer && selectedCustomer.visits >= 3
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        />
                      </div>
                      <div className="text-center">
                        <p
                          className={`text-[17px] mb-1 ${
                            selectedCustomer && selectedCustomer.visits >= 3
                              ? "text-[#101828]"
                              : "text-gray-500"
                          }`}
                        >
                          Canjear Recompensas
                        </p>
                        <p
                          className={`text-xs ${
                            selectedCustomer && selectedCustomer.visits >= 3
                              ? "text-[#4a5565]"
                              : "text-gray-400"
                          }`}
                        >
                          {selectedCustomer && selectedCustomer.visits < 3
                            ? `Necesitas ${3 - selectedCustomer.visits} visita${
                                3 - selectedCustomer.visits > 1 ? "s" : ""
                              } más`
                            : "Usa tus visitas acumuladas"}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Back Button */}
                <div className="mt-4 text-center">
                  <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-all text-[#4a5565] active:scale-[0.98]"
                  >
                    <span>Volver al inicio</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Redeem Rewards */}
          {step === "redeem-rewards" && selectedCustomer && (
            <div className="h-full flex flex-col overflow-hidden">
              <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col min-h-0">
                {/* Compact Header with Points */}
                <div className="flex items-center justify-between mb-3 bg-gradient-to-r from-[#046741]/10 to-[#046741]/5 rounded-2xl px-6 py-3 border border-[#046741]/20 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Gift className="w-6 h-6 text-[#046741]" />
                    </div>
                    <div>
                      <p className="text-[#101828]">{selectedCustomer.name}</p>
                      <p className="text-sm text-[#4a5565]">
                        {selectedCustomer.phone}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-full px-5 py-2 border-2 border-[#046741]">
                    <span className="text-[#046741]">
                      {selectedCustomer.visits} visitas
                    </span>
                  </div>
                </div>

                {/* Available Rewards Catalog */}
                <div className="bg-white rounded-2xl p-4 pr-3 border border-gray-100 shadow-sm mb-3 flex-1 min-h-0 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                  <div className="text-center mb-4">
                    <h3 className="text-[#101828] mb-1">
                      Selecciona tus recompensas
                    </h3>
                    <p className="text-sm text-[#4a5565]">
                      Toca las tarjetas para seleccionar
                    </p>
                  </div>

                  <div className="flex justify-center mb-6">
                    {isLoadingRewards ? (
                      <div className="flex items-center justify-center py-12">
                        <LoadingSpinner
                          size={48}
                          message="Cargando productos..."
                        />
                      </div>
                    ) : rewards.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-[#4a5565]">
                          No hay productos disponibles
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
                        {rewards.map((reward) => {
                          const quantity = getRewardQuantity(reward.id);
                          const isSelected = quantity > 0;
                          const currentUsed = getTotalVisitsToRedeem();
                          const remainingVisits =
                            selectedCustomer.visits - currentUsed;
                          const canAddMore = remainingVisits >= reward.points;
                          const Icon = reward.icon;

                          return (
                            <div
                              key={reward.id}
                              className={`relative bg-white rounded-[16px] overflow-hidden border-2 transition-all duration-200 text-left flex flex-col w-full ${
                                isSelected
                                  ? "border-[#046741] shadow-xl"
                                  : "border-gray-200"
                              }`}
                            >
                              {/* Quantity Badge */}
                              {isSelected && (
                                <div className="absolute top-3 right-3 z-10 min-w-[36px] h-9 px-2 rounded-full bg-[#046741] flex items-center justify-center shadow-lg">
                                  <span className="text-white">
                                    ×{quantity}
                                  </span>
                                </div>
                              )}

                              {/* Product Image - Fixed height */}
                              <div
                                className={`relative h-[140px] overflow-hidden flex-shrink-0 flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? "bg-gradient-to-br from-[#046741]/20 to-[#046741]/10"
                                    : "bg-gradient-to-br from-gray-100 to-gray-50"
                                }`}
                              >
                                <Icon
                                  className={`w-20 h-20 transition-colors ${
                                    isSelected
                                      ? "text-[#046741]"
                                      : "text-gray-400"
                                  }`}
                                />
                              </div>

                              {/* Points Badge - Positioned top-left */}
                              <div
                                className={`absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-colors shadow-sm ${
                                  isSelected
                                    ? "bg-[#046741] text-white"
                                    : "bg-white text-[#4a5565] border border-gray-200"
                                }`}
                              >
                                <Gift className="w-3.5 h-3.5" />
                                <span className="text-xs">
                                  {reward.points} visitas
                                </span>
                              </div>

                              {/* Content - Flexible */}
                              <div className="p-4 flex flex-col flex-1">
                                <h4
                                  className={`mb-1 line-clamp-1 transition-colors ${
                                    isSelected
                                      ? "text-[#046741]"
                                      : "text-[#101828]"
                                  }`}
                                >
                                  {reward.name}
                                </h4>
                                <p className="text-sm text-[#4a5565] mb-3 line-clamp-2 flex-1">
                                  {reward.description}
                                </p>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      decrementQuantity(reward.id);
                                    }}
                                    disabled={quantity === 0}
                                    className="w-10 h-10 rounded-full border-2 border-[#046741] bg-white text-[#046741] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#046741] hover:text-white transition-colors"
                                  >
                                    <Minus className="w-5 h-5" />
                                  </button>

                                  <div className="flex-1 text-center">
                                    <span className="text-[#101828]">
                                      {quantity}
                                    </span>
                                  </div>

                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      incrementQuantity(reward.id);
                                    }}
                                    disabled={!canAddMore}
                                    className="w-10 h-10 rounded-full bg-[#046741] text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#035230] transition-colors"
                                  >
                                    <Plus className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>

                              {/* Not enough visits indicator */}
                              {!canAddMore && quantity === 0 && (
                                <div className="absolute inset-0 bg-white/90 flex items-center justify-center backdrop-blur-sm">
                                  <div className="text-center">
                                    <p className="text-sm text-red-600 px-4 py-2 bg-red-50 rounded-full border border-red-200">
                                      Visitas insuficientes
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Selection Summary */}
                  {selectedRewards.length > 0 ? (
                    <div className="bg-gradient-to-r from-[#046741]/10 to-[#046741]/5 rounded-[14px] p-5 border border-[#046741]/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-[#4a5565] mb-1">
                            Seleccionadas
                          </p>
                          <p className="text-[#046741]">
                            {selectedRewards.reduce(
                              (total, r) => total + r.quantity,
                              0
                            )}{" "}
                            café
                            {selectedRewards.reduce(
                              (total, r) => total + r.quantity,
                              0
                            ) > 1
                              ? "s"
                              : ""}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-[#4a5565] mb-1">
                            Total a canjear
                          </p>
                          <p className="text-xl text-[#046741]">
                            {getTotalVisitsToRedeem()} visitas
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-[#4a5565] mb-1">
                            Visitas restantes
                          </p>
                          <p className="text-lg text-[#101828]">
                            {selectedCustomer.visits - getTotalVisitsToRedeem()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-3">
                      <p className="text-sm text-[#4a5565]">
                        {selectedCustomer.visits >= 3
                          ? "Usa los botones + y - para seleccionar la cantidad"
                          : "Necesitas acumular más visitas"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 flex-shrink-0">
                  <button
                    onClick={handleBackFromRewards}
                    className="h-14 rounded-[14px] border-2 border-gray-200 bg-white text-[#101828] hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Volver</span>
                  </button>

                  {selectedRewards.length > 0 ? (
                    <button
                      onClick={handleConfirmRedeem}
                      className="h-14 rounded-[14px] bg-[#046741] hover:bg-[#035230] text-white transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      <Gift className="w-5 h-5" />
                      <span>Canjear Recompensas</span>
                      <span className="bg-white/20 rounded-full px-2 py-1 text-sm">
                        {selectedRewards.length}
                      </span>
                    </button>
                  ) : (
                    <button
                      disabled
                      className="h-14 rounded-[14px] bg-gray-100 text-gray-400 cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                      <Gift className="w-5 h-5" />
                      <span>Selecciona una recompensa</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Register Amount */}
          {step === "register-amount" && selectedCustomer && (
            <div className="grid gap-3 h-full grid-cols-12">
              {/* Left Column */}
              <div className="flex flex-col gap-3 col-span-7 overflow-hidden">
                {/* Customer Info Card */}
                <div className="bg-white rounded-[16px] p-4 border border-gray-100 shadow-sm flex-shrink-0">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-[rgba(4,103,65,0.1)] rounded-full p-3 flex items-center justify-center">
                        <User className="w-6 h-6 text-[#046741]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#4a5565]">Cliente</p>
                        <p className="text-[#101828]">
                          {selectedCustomer.name}
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-[14px] px-4 py-4">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d={svgPaths.p3155f180}
                            stroke="#4A5565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d={svgPaths.pea6a680}
                            stroke="#4A5565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                        </svg>
                        <p className="text-sm text-[#4a5565]">Visitas</p>
                      </div>
                      <p className="text-[#101828] text-center">
                        {selectedCustomer.visits}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amount Display Card */}
                <div className="flex-1 min-h-0 bg-white rounded-[16px] p-4 border border-[#046741] shadow-sm flex flex-col gap-8 items-center justify-center overflow-auto">
                  {/* Amount Display */}
                  <button
                    onClick={() => setActiveField("amount")}
                    className={`flex flex-col items-center gap-3 w-full p-4 rounded-[14px] transition-all ${
                      activeField === "amount"
                        ? "bg-[#046741]/5 ring-2 ring-[#046741]/30"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-sm text-[#4a5565]">Monto de Visita</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-[#4a5565] text-3xl">$</span>
                      <span className="text-[#101828] text-4xl tracking-[2.4px]">
                        {amount || "0.00"}
                      </span>
                    </div>
                    {includesCoffee && (
                      <div className="bg-[rgba(4,103,65,0.1)] rounded-full px-4 py-1.5">
                        <p className="text-[#046741]">+1 visita</p>
                      </div>
                    )}
                  </button>

                  {/* Switch para incluir café */}
                  <div className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-[14px] border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Coffee className="w-5 h-5 text-[#046741]" />
                      <div>
                        <p className="text-sm font-medium text-[#101828]">
                          ¿Incluye café?
                        </p>
                        <p className="text-xs text-[#4a5565]">
                          {includesCoffee
                            ? "Se registrará visita + cashback"
                            : "Solo se registrará cashback"}
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={includesCoffee}
                      onCheckedChange={(checked) => {
                        setIncludesCoffee(checked);
                      }}
                    />
                  </div>

                  {/* Barcode Field */}
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-[#4a5565]">
                        Numero del ticket
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveField("barcode")}
                      className={`relative w-full bg-white rounded-[14px] border-2 p-3 pr-12 text-left transition-all ${
                        activeField === "barcode"
                          ? "border-[#046741] ring-2 ring-[#046741]/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <p
                        className={`${
                          barcode ? "text-[#101828]" : "text-gray-400"
                        }`}
                      >
                        {barcode || "Ingresa o escanea código"}
                      </p>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d={svgPaths.pf942a70}
                            stroke="#4A5565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.66667"
                          />
                          <path
                            d={svgPaths.p3de9ee00}
                            stroke="#4A5565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.66667"
                          />
                          <path
                            d={svgPaths.pbdf4440}
                            stroke="#4A5565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.66667"
                          />
                          <path
                            d={svgPaths.p1fb905c0}
                            stroke="#4A5565"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.66667"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Register Button */}
                <button
                  onClick={handleCompleteSale}
                  disabled={!amount}
                  className={`h-14 rounded-[14px] transition-all shadow-sm flex items-center justify-center flex-shrink-0 ${
                    amount
                      ? "bg-[#046741] hover:bg-[#035230] text-white active:scale-[0.98] hover:shadow-md"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span>Registrar visita</span>
                </button>
              </div>

              {/* Right Column - Numeric Keypad */}
              <div className="col-span-5 bg-white rounded-[16px] p-4 border border-gray-100 shadow-sm flex flex-col overflow-hidden">
                <div className="bg-gray-100 rounded-[14px] mb-3 flex-shrink-0 p-[24px]">
                  <p className="text-xs text-[#4a5565] mb-0.5">Ingresando:</p>
                  <p className="text-sm text-[#101828]">
                    {activeField === "amount"
                      ? "Monto de Visita"
                      : "Código de barras"}
                  </p>
                </div>

                <div className="flex-1 min-h-0 flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    <NumericKeypad
                      onNumberClick={handleNumberClick}
                      onClear={handleClear}
                      onBackspace={handleBackspace}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Redeem Confirmation with Figma Design */}
      {showRedeemConfirmation && (
        <div className="fixed inset-0 z-50">
          <Confirmation
            message="¡Recompensas listas!"
            subtitle="Escanea este código en caja para canjear"
            onComplete={handleNextActionFinish}
            type="redeem"
            redeemedRewards={selectedRewards.map((sr) => {
              const reward = rewards.find((r) => r.id === sr.rewardId);
              return {
                rewardId: sr.rewardId,
                name: reward?.name || "",
                points: reward?.points || 0,
                quantity: sr.quantity,
                icon: reward?.icon || Gift,
              };
            })}
            onModifyRedeem={handleModifyRedeem}
            onMarkAsRedeemed={handleMarkAsRedeemed}
          />
        </div>
      )}

      {/* Next Action Dialog */}
      {showNextActionDialog && (
        <div className="fixed inset-0 z-50">
          <Confirmation
            message="¡Recompensas Canjeadas!"
            subtitle="¿Qué deseas hacer ahora?"
            onComplete={handleNextActionFinish}
            onRegisterAnother={handleNextActionRegisterSale}
            onRedeemMore={handleNextActionRedeemMore}
            type="redeem"
          />
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <LoadingSpinner size={100} message={loadingMessage} />
        </div>
      )}
    </div>
  );
}

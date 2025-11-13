import image_f69f3e1f121b1ab153665276e885092f953e390c from '../assets/f69f3e1f121b1ab153665276e885092f953e390c.png';
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ArrowLeft } from "lucide-react";
import { NumericKeypad } from "./NumericKeypad";
import { AlphabeticKeypad } from "./AlphabeticKeypad";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Customer } from "../types";
import { createCustomer } from "../supabase/actions/customerActions";
import { toast } from "sonner";
import { LoadingSpinner } from "./LoadingSpinner";

interface NewCustomerProps {
  onBack: () => void;
  onPhoneSubmit: (phone: string) => void;
  onRegister: (customer: Customer) => void;
  initialPhone?: string;
  phoneVerified?: boolean;
}

export function NewCustomer({ onBack, onPhoneSubmit, onRegister, initialPhone = "", phoneVerified = false }: NewCustomerProps) {
  const [phone, setPhone] = useState(initialPhone);
  const [contactChannel, setContactChannel] = useState<"WhatsApp" | "SMS">("WhatsApp");
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"Masculino" | "Femenino" | "Otro">("Masculino");
  const [worksForFederal, setWorksForFederal] = useState<boolean>(false);
  const [office, setOffice] = useState("");
  const [activeInput, setActiveInput] = useState<"phone" | "name" | "office" | null>(null);
  const [showPhoneOnly, setShowPhoneOnly] = useState(!phoneVerified);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Establecer foco automático en el campo de teléfono cuando se muestra la pantalla de ingreso
  useEffect(() => {
    if (showPhoneOnly) {
      setActiveInput("phone");
    }
  }, [showPhoneOnly]);

  const handleDemoFill = () => {
    if (showPhoneOnly) {
      setPhone("5551234567");
      setActiveInput("phone");
    } else {
      setPhone("5551234567");
      setName("Juan García");
      setGender("Masculino");
      setContactChannel("WhatsApp");
      setWorksForFederal(true);
      setOffice("Oficina Central");
    }
  };

  const handleNumberClick = (num: string) => {
    if (activeInput === "phone") {
      if (phone.length < 10) setPhone(phone + num);
    }
  };

  const handleLetterClick = (letter: string) => {
    if (activeInput === "name") {
      setName(name + letter);
    } else if (activeInput === "office") {
      setOffice(office + letter);
    }
  };

  const handleSpace = () => {
    if (activeInput === "name") {
      setName(name + " ");
    } else if (activeInput === "office") {
      setOffice(office + " ");
    }
  };

  const handleClear = () => {
    if (activeInput === "phone") setPhone("");
    else if (activeInput === "name") setName("");
    else if (activeInput === "office") setOffice("");
  };

  const handleBackspace = () => {
    if (activeInput === "phone") setPhone(phone.slice(0, -1));
    else if (activeInput === "name") setName(name.slice(0, -1));
    else if (activeInput === "office") setOffice(office.slice(0, -1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const newCustomer = await createCustomer({
        phone,
        name,
        gender,
        contactChannel,
        cardBarcode: "",
        worksForFederal,
        office: worksForFederal ? office : undefined,
        points: 0,
        visits: 0,
      });
      
      onRegister(newCustomer);
    } catch (error) {
      console.error("Error al crear cliente:", error);
      toast.error(error instanceof Error ? error.message : "Error al registrar el cliente");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = phone.length === 10 && name && (!worksForFederal || office);

  return (
    <div className="h-screen bg-[#f8f9fa] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#101828] hover:text-[#046741] transition-all active:scale-[0.98]"
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
              <p className="text-xs text-[#4a5565]">Nuevo Cliente</p>
            </div>
          </div>
          <button
            onClick={handleDemoFill}
            className="text-sm text-[#046741] hover:underline"
          >
            Demo
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full p-[24px]">
          <div className="grid grid-cols-12 gap-3 h-full">
            {/* Left Column - Form */}
            <div className="col-span-7 bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto p-[8px] px-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                {showPhoneOnly ? (
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-center items-center gap-4">
                    <div className="text-center">
                      <h2 className="text-[#101828] text-2xl mb-2">Ingresa tu teléfono</h2>
                      <p className="text-[#4a5565]">Te enviaremos un código de verificación</p>
                    </div>
                    
                    <div className="w-full max-w-md space-y-4">
                      <button
                        type="button"
                        onClick={() => setActiveInput("phone")}
                        className={`w-full p-4 rounded-[14px] border transition-all text-center ${
                          activeInput === "phone" 
                            ? "border-[#046741] bg-[#046741]/5" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <label className="block text-sm text-[#4a5565] mb-2">Número de teléfono *</label>
                        <div className="text-[#101828] text-2xl tracking-wider">{phone || "__________"}</div>
                      </button>

                      <div>
                        <label className="block text-sm text-[#4a5565] mb-2">Canal de contacto *</label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setContactChannel("WhatsApp")}
                            className={`p-3 rounded-[14px] border transition-all ${
                              contactChannel === "WhatsApp"
                                ? "border-[#046741] bg-[#046741]/5 text-[#101828]"
                                : "border-gray-200 text-[#4a5565] hover:border-gray-300"
                            }`}
                          >
                            WhatsApp
                          </button>
                          <button
                            type="button"
                            onClick={() => setContactChannel("SMS")}
                            className={`p-3 rounded-[14px] border transition-all ${
                              contactChannel === "SMS"
                                ? "border-[#046741] bg-[#046741]/5 text-[#101828]"
                                : "border-gray-200 text-[#4a5565] hover:border-gray-300"
                            }`}
                          >
                            SMS
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={phone.length !== 10}
                      onClick={() => onPhoneSubmit(phone)}
                      className={`h-12 rounded-[14px] transition-all shadow-sm px-12 active:scale-[0.98] ${
                        phone.length === 10
                          ? "bg-[#046741] hover:bg-[#035230] text-white"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <span>Continuar</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveInput("name")}
                    className={`w-full p-3 rounded-[14px] border transition-all text-left ${
                      activeInput === "name" 
                        ? "border-[#046741] bg-[#046741]/5" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <label className="block text-sm text-[#4a5565] mb-1">Nombre Completo *</label>
                    <div className="text-[#101828]">{name || "_______________"}</div>
                  </button>

                  <button
                    type="button"
                    disabled
                    className="p-3 rounded-[14px] border border-gray-200 bg-gray-50 text-left cursor-not-allowed w-full"
                  >
                    <label className="block text-sm text-[#4a5565] mb-1">Teléfono * (Verificado)</label>
                    <div className="text-[#101828]">{phone}</div>
                  </button>



                  <div>
                    <label className="block text-sm text-[#4a5565] mb-2">Género *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Masculino", "Femenino", "Otro"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGender(g as any)}
                          className={`p-3 rounded-[14px] border transition-all flex items-center justify-center ${
                            gender === g
                              ? "border-[#046741] bg-[#046741]/5 text-[#101828]"
                              : "border-gray-200 text-[#4a5565] hover:border-gray-300"
                          }`}
                        >
                          <span className="text-center">{g}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#4a5565] mb-2">¿Trabajas para el polígono federal?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setWorksForFederal(true);
                          setOffice("");
                        }}
                        className={`p-3 rounded-[14px] border transition-all flex items-center justify-center ${
                          worksForFederal
                            ? "border-[#046741] bg-[#046741]/5 text-[#101828]"
                            : "border-gray-200 text-[#4a5565] hover:border-gray-300"
                        }`}
                      >
                        <span className="text-center">Sí</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setWorksForFederal(false);
                          setOffice("");
                        }}
                        className={`p-3 rounded-[14px] border transition-all flex items-center justify-center ${
                          !worksForFederal
                            ? "border-[#046741] bg-[#046741]/5 text-[#101828]"
                            : "border-gray-200 text-[#4a5565] hover:border-gray-300"
                        }`}
                      >
                        <span className="text-center">No</span>
                      </button>
                    </div>
                  </div>

                  {worksForFederal && (
                    <button
                      type="button"
                      onClick={() => setActiveInput("office")}
                      className={`w-full p-3 rounded-[14px] border transition-all text-left ${
                        activeInput === "office" 
                          ? "border-[#046741] bg-[#046741]/5" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <label className="block text-sm text-[#4a5565] mb-1">Oficina</label>
                      <div className="text-[#101828]">{office || "Ingresa la oficina a la que perteneces"}</div>
                    </button>
                  )}

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full h-14 rounded-[14px] transition-all shadow-sm flex items-center justify-center flex-shrink-0 ${
                      isFormValid && !isSubmitting
                        ? "bg-[#046741] hover:bg-[#035230] text-white active:scale-[0.98]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <LoadingSpinner size={20} />
                        <span className="text-lg text-center">Registrando...</span>
                      </div>
                    ) : (
                      <span className="text-lg text-center">Registrar Cliente</span>
                    )}
                  </button>
                </form>
              )}
              </div>
            </div>

            {/* Right Column - Numpad */}
            <div className="col-span-5 bg-white rounded-[16px] p-4 border border-gray-100 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
              <div className="bg-gray-100 rounded-[14px] mb-3 flex-shrink-0 p-[24px]">
                <p className="text-xs text-[#4a5565] mb-0.5">Ingresando:</p>
                <p className="text-sm text-[#101828]">
                  {activeInput === "phone" && "Teléfono"}
                  {activeInput === "name" && "Nombre Completo"}
                  {activeInput === "office" && "Oficina"}
                  {!activeInput && "Selecciona un campo"}
                </p>
              </div>
              
              <div className="flex-1 min-h-0 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  {(activeInput === "name" || activeInput === "office") ? (
                    <AlphabeticKeypad
                      onLetterClick={handleLetterClick}
                      onSpace={handleSpace}
                      onClear={handleClear}
                      onBackspace={handleBackspace}
                    />
                  ) : (
                    <NumericKeypad
                      onNumberClick={handleNumberClick}
                      onClear={handleClear}
                      onBackspace={handleBackspace}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

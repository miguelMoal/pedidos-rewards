import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowLeft, Phone, RefreshCw } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NumericKeypad } from "./NumericKeypad";
import { LoadingSpinner } from "./LoadingSpinner";
import image_f69f3e1f121b1ab153665276e885092f953e390c from '../assets/f69f3e1f121b1ab153665276e885092f953e390c.png';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "./ui/input-otp";
import { toast } from "sonner";

interface OTPVerificationProps {
  phone: string;
  onBack: () => void;
  onVerified: () => void;
}

export function OTPVerification({ phone, onBack, onVerified }: OTPVerificationProps) {
  const [otp, setOtp] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleOTPComplete = async (value: string) => {
    setOtp(value);
    setIsVerifying(true);
    // Simulamos validación - en producción esto iría a un servidor
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    if (value === "1234") {
      toast.success("Código verificado correctamente");
      setTimeout(() => {
        setIsVerifying(false);
        onVerified();
      }, 500);
    } else {
      setError(true);
      setIsVerifying(false);
      toast.error("Código incorrecto");
      setTimeout(() => {
        setOtp("");
        setError(false);
      }, 1500);
    }
  };

  const handleResend = () => {
    setIsResending(true);
    // Simulamos reenvío de código
    setTimeout(() => {
      setIsResending(false);
      toast.success("Código reenviado exitosamente");
    }, 1500);
  };

  const handleDemoFill = () => {
    setOtp("1234");
    handleOTPComplete("1234");
  };

  const handleNumberClick = (num: string) => {
    if (otp.length < 4) {
      const newOtp = otp + num;
      setOtp(newOtp);
      if (newOtp.length === 4) {
        handleOTPComplete(newOtp);
      }
    }
  };

  const handleClear = () => {
    setOtp("");
    setError(false);
  };

  const handleBackspace = () => {
    setOtp(otp.slice(0, -1));
    setError(false);
  };

  return (
    <div className="h-screen bg-[#f8f9fa] flex flex-col overflow-hidden">
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
              <p className="text-xs text-[#4a5565]">Verificación de Teléfono</p>
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
            {/* Left Column - OTP Display */}
            <div className="col-span-7 flex flex-col items-center justify-center">
              <div className="w-full max-w-lg">
                <div className="bg-white rounded-[16px] p-4 border border-gray-200 shadow-sm text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#046741]/10 to-[#046741]/5 mb-3 border border-[#046741]/20">
                    <Phone className="w-7 h-7 text-[#046741]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#101828] mb-1.5">Verifica tu número</h3>
                  <p className="text-sm text-[#4a5565] mb-1">
                    Ingresa el código de 4 dígitos enviado a
                  </p>
                  <p className="text-[#046741] mb-4">{phone}</p>

                  {/* OTP Input */}
                  <div className="flex justify-center mb-4">
                    <InputOTP
                      maxLength={4}
                      value={otp}
                      onChange={(value) => {
                        setOtp(value);
                        setError(false);
                        if (value.length === 4) {
                          handleOTPComplete(value);
                        }
                      }}
                    >
                      <InputOTPGroup className="gap-2">
                        <InputOTPSlot 
                          index={0} 
                          className={`w-12 h-12 text-xl border-2 rounded-xl ${
                            error 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-200 focus:border-[#046741]"
                          }`}
                        />
                        <InputOTPSlot 
                          index={1} 
                          className={`w-12 h-12 text-xl border-2 rounded-xl ${
                            error 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-200 focus:border-[#046741]"
                          }`}
                        />
                        <InputOTPSlot 
                          index={2} 
                          className={`w-12 h-12 text-xl border-2 rounded-xl ${
                            error 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-200 focus:border-[#046741]"
                          }`}
                        />
                        <InputOTPSlot 
                          index={3} 
                          className={`w-12 h-12 text-xl border-2 rounded-xl ${
                            error 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-200 focus:border-[#046741]"
                          }`}
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-[14px] p-2 mb-3">
                      <p className="text-sm text-red-900">Código incorrecto, intenta de nuevo</p>
                    </div>
                  )}

                  {/* Resend Button */}
                  <div className="pt-3 border-t border-gray-100">
                    <button
                      onClick={handleResend}
                      disabled={isResending}
                      className="flex items-center gap-2 mx-auto text-[#046741] hover:text-[#035230] transition-all disabled:opacity-50 active:scale-[0.98]"
                    >
                      <RefreshCw className={`w-4 h-4 ${isResending ? "animate-spin" : ""}`} />
                      <span className="text-sm">
                        {isResending ? "Reenviando..." : "No recibí el código, reenviar"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Help Text */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-[#4a5565]">
                    💡 Para demo, usa el código: <span className="text-[#046741]">1234</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Numeric Keypad */}
            <div className="col-span-5 bg-white rounded-[16px] p-4 border border-gray-100 shadow-sm flex flex-col overflow-hidden">
              <div className="bg-gray-100 rounded-[14px] mb-3 flex-shrink-0 p-[24px]">
                <p className="text-xs text-[#4a5565] mb-0.5">Ingresando:</p>
                <p className="text-sm text-[#101828]">Código de Verificación</p>
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
        </div>
      </div>

      {/* Loading Overlay */}
      {isVerifying && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <LoadingSpinner size={100} message="Verificando código..." />
        </div>
      )}
    </div>
  );
}

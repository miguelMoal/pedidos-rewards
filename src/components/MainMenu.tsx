import image_d320e008bd3b0133ec25b9628d3871111ca98fa7 from '../assets/d320e008bd3b0133ec25b9628d3871111ca98fa7.png';
import { UserPlus, CreditCard } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MainMenuProps {
  onNewCustomer: () => void;
  onRegisterSale: () => void;
}

export function MainMenu({ onNewCustomer, onRegisterSale }: MainMenuProps) {

  return (
    <div className="h-screen bg-gradient-to-br from-[#f8f9fa] via-[#f8f9fa] to-[#e8f5f1] flex flex-col overflow-hidden">
      {/* Header Bar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={image_d320e008bd3b0133ec25b9628d3871111ca98fa7}
              alt="Rewards FA Logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-[#101828] text-xl">Puesto Rewards</h1>
              <p className="text-xs text-[#046741]">Sistema de Lealtad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div className="w-full max-w-5xl">
          {/* Welcome Message */}
          <div className="text-center mb-4">
            <h2 className="text-[#101828] text-[24px] leading-tight mb-2 font-bold">¡Bienvenido!</h2>
            <p className="text-[#4a5565] text-[16px]">¿Qué deseas hacer hoy?</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={onNewCustomer}
              className="bg-white rounded-2xl p-12 transition-all hover:shadow-xl hover:-translate-y-1 border-2 border-gray-100 group relative overflow-hidden active:scale-[0.98]"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#046741]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative flex flex-col items-center gap-6">
                <div className="bg-gradient-to-br from-[#046741] to-[#035230] rounded-2xl p-5 shadow-lg group-hover:scale-110 transition-transform">
                  <UserPlus className="w-12 h-12 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-[#101828] text-[17px] leading-tight mb-1">Nuevo Cliente</p>
                  <p className="text-xs text-[#4a5565]">Regístrate y comienza a acumular puntos</p>
                </div>
              </div>
            </button>
            
            <button
              onClick={onRegisterSale}
              className="bg-white rounded-2xl p-12 transition-all hover:shadow-xl hover:-translate-y-1 border-2 border-gray-100 group relative overflow-hidden active:scale-[0.98]"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#046741]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative flex flex-col items-center gap-6">
                <div className="bg-gradient-to-br from-[#046741] to-[#035230] rounded-2xl p-5 shadow-lg group-hover:scale-110 transition-transform">
                  <CreditCard className="w-12 h-12 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-[#101828] text-[17px] leading-tight mb-1">Registrar Puntos</p>
                  <p className="text-xs text-[#4a5565]">Acumula o canjea tus puntos</p>
                </div>
              </div>
            </button>
          </div>

          {/* Info Footer */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2.5 border border-gray-200">
              <div className="w-2 h-2 bg-[#046741] rounded-full opacity-[0.912]"></div>
              <p className="text-sm text-[#4a5565]">1 compra = 1 visita registrada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

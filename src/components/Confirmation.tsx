import { ImageWithFallback } from "./figma/ImageWithFallback";
import image_f69f3e1f121b1ab153665276e885092f953e390c from "../assets/f69f3e1f121b1ab153665276e885092f953e390c.png";
import svgPaths from "./svg-confirmation";
import svgPathsRedeem from "../imports/svg-r8trpdmxix";
import svgPathsCompleted from "../imports/svg-2zrjqturdd";
import { CreditCard, Gift, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

interface RedeemedReward {
  rewardId: string;
  name: string;
  points: number;
  quantity: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface ConfirmationProps {
  message: string;
  subtitle?: string;
  onComplete: () => void;
  onRegisterAnother?: () => void;
  onRedeemMore?: () => void;
  type?: "sale" | "redeem" | "new-customer" | "redeem-completed";
  redeemedRewards?: RedeemedReward[];
  onModifyRedeem?: () => void;
  onMarkAsRedeemed?: () => void;
  redeemDisabled?: boolean;
  redeemDisabledMessage?: string;
}

export function Confirmation({
  message,
  subtitle = "¿Qué deseas hacer ahora?",
  onComplete,
  onRegisterAnother,
  onRedeemMore,
  type = "new-customer",
  redeemedRewards = [],
  onModifyRedeem,
  onMarkAsRedeemed,
  redeemDisabled = false,
  redeemDisabledMessage,
}: ConfirmationProps) {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (type === "redeem-completed") {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [type, onComplete]);

  // Redeem completed - Final confirmation screen
  if (type === "redeem-completed") {
    return (
      <div className="h-screen bg-[#f8f9fa] flex flex-col">
        {/* Header with Logo */}
        <div className="bg-white border-b border-gray-100 px-6 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src={image_f69f3e1f121b1ab153665276e885092f953e390c}
                alt="Rewards FA Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-[#101828] leading-tight">Puesto Rewards</h1>
                <p className="text-xs text-[#4a5565]">Terminal de Venta</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-6">
          <div className="bg-white border border-gray-100 rounded-[16px] p-8 max-w-[509px] w-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
            {/* Success Icon */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="bg-[rgba(4,103,65,0.1)] w-24 h-24 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
                  <path
                    d={svgPathsCompleted.p1b47d580}
                    stroke="#046741"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5.33333"
                  />
                  <path
                    d={svgPathsCompleted.pffc74c0}
                    stroke="#046741"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5.33333"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <h2 className="text-[#101828] text-center font-bold">
                  ¡Recompensas Canjeadas!
                </h2>
                <p className="text-[#4a5565] text-center">
                  Regresando al menú en {countdown} segundos...
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={onComplete}
              className="mx-auto w-64 bg-[#046741] hover:bg-[#035230] text-white h-14 rounded-[14px] transition-all active:scale-[0.98] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center"
            >
              <span className="text-lg">Volver al Menú</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Redeem confirmation - Figma design
  if (type === "redeem" && redeemedRewards.length > 0) {
    return (
      <div className="h-screen bg-[#f8f9fa] flex flex-col">
        {/* Header with Logo */}
        <div className="bg-white border-b border-gray-100 px-6 py-6">
          <div className="flex items-center justify-between max-w-[1558px] mx-auto">
            <button
              onClick={onComplete}
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
                <p className="text-xs text-[#4a5565]">Confirmar Canje</p>
              </div>
            </div>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-6">
          <div className="bg-white border border-gray-100 rounded-[16px] p-5 lg:p-7 max-w-[672px] w-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
            {/* Success Icon and Title */}
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="bg-[rgba(4,103,65,0.1)] w-20 h-20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
                  <path
                    d={svgPathsRedeem.p19a01780}
                    stroke="#046741"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.33333"
                  />
                  <path
                    d={svgPathsRedeem.p24376300}
                    stroke="#046741"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.33333"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <h2 className="text-[#101828]">¡Recompensas listas!</h2>
                <p className="text-[#4a5565]">
                  Ya puedes canjear tus recompensas
                </p>
              </div>
            </div>

            {/* Rewards List */}
            <div className="bg-gray-50 border border-[#ebebeb] rounded-[14px] p-5 mb-6 max-h-[354px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
              <p className="text-sm text-[#4a5565] mb-3">
                Recompensas a canjear:
              </p>

              <div className="space-y-3 pr-2">
                {redeemedRewards.map((reward) => {
                  const Icon = reward.icon;
                  const totalPoints = reward.points * reward.quantity;

                  return (
                    <div
                      key={reward.rewardId}
                      className="bg-white border border-gray-200 rounded-[10px] p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-[rgba(4,103,65,0.1)] w-10 h-10 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#046741]" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#101828]">{reward.name}</span>
                          {reward.quantity > 1 && (
                            <span className="text-[#4a5565] text-sm">
                              x{reward.quantity}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[#046741]">
                        -{totalPoints} visita{totalPoints !== 1 ? "s" : ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {onModifyRedeem && (
                <button
                  onClick={onModifyRedeem}
                  className="bg-white border-2 border-gray-200 text-[#101828] h-14 rounded-[14px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-[0.98]"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Modificar</span>
                </button>
              )}

              {onMarkAsRedeemed && (
                <button
                  onClick={onMarkAsRedeemed}
                  className="bg-[#046741] text-white h-14 rounded-[14px] flex items-center justify-center gap-2 hover:bg-[#035230] transition-all active:scale-[0.98] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Marcar como Canjeado</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default confirmation design (for sales and new customers)
  return (
    <div className="h-screen bg-[#f8f9fa] flex flex-col">
      {/* Header with Logo */}
      <div className="bg-white border-b border-gray-100 px-6 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={image_f69f3e1f121b1ab153665276e885092f953e390c}
              alt="Rewards FA Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-[#101828] leading-tight">Puesto Rewards</h1>
              <p className="text-xs text-[#4a5565]">
                {type === "redeem"
                  ? "Confirmar Canje"
                  : type === "new-customer"
                  ? "Registro de Cliente"
                  : "Terminal de Venta"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white border border-gray-100 rounded-[16px] p-8 text-center max-w-[672px] w-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          {/* Success Icon */}
          <div className="bg-[rgba(4,103,65,0.1)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-[#046741]">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
              <path
                d={svgPaths.p19a01780}
                stroke="#046741"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.33333"
              />
              <path
                d={svgPaths.p24376300}
                stroke="#046741"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.33333"
              />
            </svg>
          </div>

          {/* Visit Badge - Only for sale confirmations */}
          {type === "sale" && (
            <div className="inline-flex items-center gap-1.5 bg-[rgba(4,103,65,0.08)] text-[#046741] px-3 py-1.5 rounded-full mb-4 border border-[rgba(4,103,65,0.2)]">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="text-sm">1 Visita Registrada</span>
            </div>
          )}

          {/* Title and Subtitle */}
          <h2 className="text-[#101828] mb-3 text-2xl font-bold">{message}</h2>
          <p className="text-[#4a5565] mb-10">{subtitle}</p>

          {/* Action Buttons */}
          <div className="space-y-4">
            {/* Registrar una Compra - Show for redeem confirmations and new customer */}
            {(type === "redeem" || type === "new-customer") &&
              onRegisterAnother && (
                <button
                  onClick={onRegisterAnother}
                  className="w-full bg-[#046741] hover:bg-[#035230] text-white h-20 rounded-[14px] transition-all active:scale-[0.98] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center gap-3"
                >
                  <CreditCard className="w-6 h-6" />
                  <span className="text-lg">Registrar una Compra</span>
                </button>
              )}

            {/* Canjear Recompensas - Primary button for sale confirmations, secondary for redeem */}
            {onRedeemMore && (
              <button
                onClick={onRedeemMore}
                disabled={redeemDisabled}
                className={`w-full h-20 rounded-[14px] transition-all flex items-center justify-center gap-3 ${
                  redeemDisabled
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-200"
                    : type === "sale"
                    ? "bg-[#046741] hover:bg-[#035230] text-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] active:scale-[0.98]"
                    : "bg-white hover:bg-gray-50 text-[#101828] border-2 border-gray-200 active:scale-[0.98]"
                }`}
              >
                <Gift
                  className={`w-6 h-6 ${
                    redeemDisabled
                      ? "text-gray-400"
                      : type === "sale"
                      ? "text-white"
                      : "text-[#046741]"
                  }`}
                />
                <div className="flex flex-col items-center">
                  <span className="text-lg">Canjear Recompensas</span>
                  {redeemDisabled && redeemDisabledMessage && (
                    <span className="text-xs text-gray-400 mt-1">
                      {redeemDisabledMessage}
                    </span>
                  )}
                </div>
              </button>
            )}

            {/* Finalizar y volver al Inicio */}
            <button
              onClick={onComplete}
              className="w-full text-[#4a5565] hover:text-[#101828] h-14 rounded-[14px] transition-all flex items-center justify-center active:scale-[0.98]"
            >
              <span>Finalizar y volver al Inicio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

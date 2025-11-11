import { Delete, ArrowBigUp } from "lucide-react";
import { useState } from "react";

interface AlphabeticKeypadProps {
  onLetterClick: (letter: string) => void;
  onSpace: () => void;
  onClear: () => void;
  onBackspace: () => void;
}

export function AlphabeticKeypad({
  onLetterClick,
  onSpace,
  onClear,
  onBackspace,
}: AlphabeticKeypadProps) {
  const [isUpperCase, setIsUpperCase] = useState(false);

  // Teclado estilo iOS/Android en español
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const accents = ["Á", "É", "Í", "Ó", "Ú", "Ü"];

  const handleLetterClick = (letter: string) => {
    onLetterClick(isUpperCase ? letter : letter.toLowerCase());
  };

  const toggleCase = () => {
    setIsUpperCase(!isUpperCase);
  };

  return (
    <div className="w-full flex flex-col gap-1.5">
      {/* First Letter Row - QWERTYUIOP */}
      <div className="grid grid-cols-10 gap-1">
        {row1.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className="h-11 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-all active:bg-gray-200 flex items-center justify-center"
          >
            <span className="text-base text-[#101828]">
              {isUpperCase ? letter : letter.toLowerCase()}
            </span>
          </button>
        ))}
      </div>

      {/* Second Letter Row - ASDFGHJKLÑ */}
      <div className="flex gap-1">
        <div className="w-[5%]"></div>
        <div className="flex-1 grid grid-cols-10 gap-1">
          {row2.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className="h-11 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-all active:bg-gray-200 flex items-center justify-center"
            >
              <span className="text-base text-[#101828]">
                {isUpperCase ? letter : letter.toLowerCase()}
              </span>
            </button>
          ))}
        </div>
        <div className="w-[5%]"></div>
      </div>

      {/* Third Letter Row - Shift + ZXCVBNM + Backspace */}
      <div className="grid grid-cols-10 gap-1">
        <button
          onClick={toggleCase}
          className={`h-11 border rounded-md transition-all active:bg-gray-200 flex items-center justify-center ${
            isUpperCase
              ? "bg-[#046741] border-[#046741] text-white"
              : "bg-[#e5e7eb] border-gray-300 text-[#101828] hover:bg-gray-300"
          }`}
        >
          <ArrowBigUp className="w-4 h-4" />
        </button>
        
        {row3.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className="h-11 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-all active:bg-gray-200 flex items-center justify-center"
          >
            <span className="text-base text-[#101828]">
              {isUpperCase ? letter : letter.toLowerCase()}
            </span>
          </button>
        ))}

        <button
          onClick={onBackspace}
          className="col-span-2 h-11 bg-[#e5e7eb] border border-gray-300 hover:bg-gray-300 rounded-md transition-all active:bg-gray-400 flex items-center justify-center"
        >
          <Delete className="w-4 h-4 text-[#101828]" />
        </button>
      </div>

      {/* Accents Row */}
      <div className="flex gap-1 justify-center">
        {accents.map((accent) => (
          <button
            key={accent}
            onClick={() => handleLetterClick(isUpperCase ? accent : accent.toLowerCase())}
            className="h-10 w-12 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-all active:bg-gray-200 flex items-center justify-center"
          >
            <span className="text-sm text-[#101828]">
              {isUpperCase ? accent : accent.toLowerCase()}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom Row - Clear + Space */}
      <div className="grid grid-cols-4 gap-1">
        <button
          onClick={onClear}
          className="h-11 bg-[#e5e7eb] border border-gray-300 hover:bg-gray-300 rounded-md transition-all active:bg-gray-400 flex items-center justify-center"
        >
          <span className="text-xs text-[#101828]">Limpiar</span>
        </button>
        <button
          onClick={onSpace}
          className="col-span-3 h-11 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-all active:bg-gray-200 flex items-center justify-center"
        >
          <span className="text-sm text-[#101828]">espacio</span>
        </button>
      </div>
    </div>
  );
}

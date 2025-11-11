import { Delete, X } from "lucide-react";

interface NumericKeypadProps {
  onNumberClick: (num: string) => void;
  onClear: () => void;
  onBackspace: () => void;
}

export function NumericKeypad({ onNumberClick, onClear, onBackspace }: NumericKeypadProps) {
  const rows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', 'back']
  ];
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-3 gap-2">
            {row.map((key) => {
              if (key === 'back') {
                return (
                  <button
                    key={key}
                    onClick={onBackspace}
                    className="h-16 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-[#364153] rounded-[10px] transition-all active:scale-95 flex items-center justify-center"
                  >
                    <Delete className="w-6 h-6" />
                  </button>
                );
              }
              return (
                <button
                  key={key}
                  onClick={() => onNumberClick(key)}
                  className="h-16 bg-white hover:bg-gray-50 active:bg-gray-100 text-[#101828] rounded-[10px] transition-all active:scale-95 border border-gray-100 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center text-2xl"
                >
                  {key}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <button
        onClick={onClear}
        className="w-full h-12 bg-white hover:bg-gray-50 active:bg-gray-100 text-[#0a0a0a] rounded-[10px] transition-all active:scale-95 border border-[rgba(0,0,0,0.1)] flex items-center justify-center gap-2"
      >
        <X className="w-5 h-5" />
        <span>Limpiar</span>
      </button>
    </div>
  );
}

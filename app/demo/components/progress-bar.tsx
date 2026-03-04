"use client";

type ProgressBarProps = {
  step: number;
  total: number;
  currentTitle?: string;
};

export function ProgressBar({
  step,
  total,
  currentTitle,
}: ProgressBarProps) {
  const percentage = ((step + 1) / total) * 100;

  return (
    <div className="space-y-4">

      {/* Texto */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>
          Passo {step + 1} de {total}
        </span>

        {currentTitle && (
          <span className="font-medium text-gray-800">
            {currentTitle}
          </span>
        )}
      </div>

      {/* Barra principal */}
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-2 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Step indicators (bolinhas) */}
      <div className="flex justify-between mt-2">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all
              ${
                index <= step
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
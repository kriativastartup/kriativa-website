import { useState } from "react";

export function useMultiStep(totalSteps: number) {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < totalSteps - 1) setStep((s) => s + 1);
  };

  const prev = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  return { step, next, prev };
}
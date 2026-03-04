"use client";

import { FormProvider } from "./FormContext";
import { StepRenderer } from "./StepRenderer";
import { DynamicSections } from "./DynamicSection";
import { schema } from "./types";
import { ProgressBar } from "./progress-bar";
import { useMultiStep } from "@/hooks/multi-step";

export default function DemoForm() {
  const totalSteps = schema.steps.length + 1;
  const { step, next, prev } = useMultiStep(totalSteps);

  return (
    <FormProvider>
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <ProgressBar step={step} total={totalSteps} />

        {step < schema.steps.length ? (
          <StepRenderer stepSchema={schema.steps[step]} />
        ) : (
          <>
            <DynamicSections />
            <StepRenderer stepSchema={schema.finalStep} />
          </>
        )}

        <div className="flex justify-between mt-6">
          <button onClick={prev}>Voltar</button>
          <button onClick={next}>Próximo</button>
        </div>
      </div>
    </FormProvider>
  );
}
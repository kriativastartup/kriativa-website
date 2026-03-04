"use client";

import { useFormData } from "./FormContext";
import { FieldRenderer } from "./StepRenderer";
import { schema } from "./types";

export function DynamicSections() {
  const { data, updateField } = useFormData();

  const selectedServices = data.servicos || [];

  return (
    <>
      {selectedServices.map((service: string) => {
        const section =
          schema.conditionalSections[
            service as keyof typeof schema.conditionalSections
          ];
        if (!section) return null;

        return (
          <div key={service} className="mt-8">
            <h3 className="text-lg font-semibold capitalize">{service}</h3>

            {section.fields.map((field: any) => (
              <FieldRenderer
                key={field.name}
                field={field}
                value={data[field.name]}
                onChange={(value) => updateField(field.name, value)}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}

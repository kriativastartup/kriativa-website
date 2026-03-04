"use client";

import { useFormData } from "./FormContext";

export function FieldRenderer({ field, value, onChange }: any) {
  switch (field.type) {
    case "text":
    case "email":
    case "tel":
    case "number":
    case "date":
      return (
        <div>
          <label className="block text-sm font-medium mb-1">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type={field.type}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder={field.placeholder}
          />
        </div>
      );

    case "textarea":
      return (
        <div>
          <label className="block text-sm font-medium mb-1">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          <textarea
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
      );

    case "boolean":
      return (
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={value || false}
            onChange={(e) => onChange(e.target.checked)}
          />
          {field.label}
        </label>
      );

    case "select":
      return (
        <div>
          <label className="block text-sm font-medium mb-1">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          <select
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="border p-2 w-full rounded"
          >
            <option value="">Selecione</option>
            {field.options.map((opt: any) => (
              <option key={opt.value} value={opt.value}>
                {opt.label || opt}
              </option>
            ))}
          </select>
        </div>
      );

    case "checkbox":
      return (
        <div>
          <label className="block text-sm font-medium mb-1">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.options.map((opt: any) => (
            <label key={opt.value} className="block">
              <input
                type="checkbox"
                checked={value?.includes(opt.value) || false}
                onChange={(e) => {
                  if (e.target.checked) {
                    onChange([...(value || []), opt.value]);
                  } else {
                    onChange(value.filter((v: any) => v !== opt.value));
                  }
                }}
              />
              {opt.label}
            </label>
          ))}
        </div>
      );

    case "radio":
      return (
        <div>
          {field.options.map((opt: any) => (
            <label key={opt.value} className="block">
              <input
                type="radio"
                name={field.name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export function StepRenderer({ stepSchema }: { stepSchema: any }) {
  const { data, updateField } = useFormData();

  return (
    <div className="space-y-4">
      {stepSchema.fields.map((field: any) => (
        <FieldRenderer
          key={field.name}
          field={field}
          value={data[field.name]}
          onChange={(value) => updateField(field.name, value)}
        />
      ))}
    </div>
  );
}

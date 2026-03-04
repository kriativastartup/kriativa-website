"use client";

import { createContext, useContext, useState } from "react";

type FormDataType = Record<string, any>;

type FormContextType = {
  data: FormDataType;
  updateField: (name: string, value: any) => void;
};

const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<FormDataType>({});

  function updateField(name: string, value: any) {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <FormContext.Provider value={{ data, updateField }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormData must be used inside FormProvider");
  return context;
}
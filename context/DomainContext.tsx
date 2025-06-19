"use client";
import { createContext, useState, useContext, ReactNode } from "react";

// 1. Define the type
export interface DomainContextType {
  domain: string;
  setDomain: (domain: string) => void;
}

// 2. Create the context
export const DomainContext = createContext<DomainContextType | null>(null);

// 3. Create the provider component
export const DomainProvider = ({ children }: { children: ReactNode }) => {
  const [domain, setDomain] = useState<string>("Image Converter");

  return (
    <DomainContext.Provider value={{ domain, setDomain }}>
      {children}
    </DomainContext.Provider>
  );
};

// 4. Optional: Custom hook for easy use
export const useDomain = () => {
  const context = useContext(DomainContext);
  if (!context) throw new Error("useDomain must be used within DomainProvider");
  return context;
};

"use client"
import { createContext, useState, useContext, type ReactNode } from "react"

// 1. Define the type
export interface DomainContextType {
  domain: string
  setDomain: (domain: string) => void
}

// 2. Create the context with a default value
export const DomainContext = createContext<DomainContextType>({
  domain: "Image Converter",
  setDomain: () => {},
})

// 3. Create the provider component
export const DomainProvider = ({ children }: { children: ReactNode }) => {
  const [domain, setDomain] = useState<string>("Image Converter")

  return <DomainContext.Provider value={{ domain, setDomain }}>{children}</DomainContext.Provider>
}

// 4. Custom hook with better error handling
export const useDomain = () => {
  const context = useContext(DomainContext)
  // Return the context even if it's the default value
  return context
}

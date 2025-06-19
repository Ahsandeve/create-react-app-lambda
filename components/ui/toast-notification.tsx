"use client";

import React from "react";
import {
  ToastContainer,
  toast,
  Slide,
  type ToastOptions,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckCircle, AlertCircle, Info, X, AlertTriangle } from "lucide-react";

// Create a context to provide toast functions throughout the app
export const ToastContext = React.createContext({
  success: (message: string, options?: ToastOptions) => {},
  error: (message: string, options?: ToastOptions) => {},
  info: (message: string, options?: ToastOptions) => {},
  warning: (message: string, options?: ToastOptions) => {},
});

// Custom toast components
const SuccessToast = ({ message }: { message: string }) => (
  <div className="flex items-start">
    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
    <div className="flex-1">{message}</div>
  </div>
);

const ErrorToast = ({ message }: { message: string }) => (
  <div className="flex items-start">
    <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
    <div className="flex-1">{message}</div>
  </div>
);

const InfoToast = ({ message }: { message: string }) => (
  <div className="flex items-start">
    <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
    <div className="flex-1">{message}</div>
  </div>
);

const WarningToast = ({ message }: { message: string }) => (
  <div className="flex items-start">
    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
    <div className="flex-1">{message}</div>
  </div>
);

// Toast provider component
export function ToastProvider({ children }: { children: React.ReactNode }) {
  // Default toast options
  const defaultOptions: ToastOptions = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    className: "rounded-custom !font-sans",
    bodyClassName: "text-sm font-medium",
    closeButton: ({ closeToast }) => (
      <button
        onClick={closeToast}
        className="p-1 ml-auto mr-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <X className="h-4 w-4  text-gray-500 dark:text-gray-400" />
      </button>
    ),
  };

  // Toast functions
  const toastFunctions = {
    success: (message: string, options?: ToastOptions) =>
      toast(<SuccessToast message={message} />, {
        ...defaultOptions,
        ...options,
      }),

    error: (message: string, options?: ToastOptions) =>
      toast(<ErrorToast message={message} />, {
        ...defaultOptions,
        ...options,
      }),

    info: (message: string, options?: ToastOptions) =>
      toast(<InfoToast message={message} />, { ...defaultOptions, ...options }),

    warning: (message: string, options?: ToastOptions) =>
      toast(<WarningToast message={message} />, {
        ...defaultOptions,
        ...options,
      }),
  };

  return (
    <ToastContext.Provider value={toastFunctions}>
      {children}
      <ToastContainer toastClassName="rounded-custom shadow-lg bg-white dark:bg-gray-800 dark:text-white" />
    </ToastContext.Provider>
  );
}

// Custom hook to use toast
export const useToast = () => {
  return React.useContext(ToastContext);
};

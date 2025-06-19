"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import {
  ArrowDown,
  Download,
  Trash,
  RefreshCw,
  X,
  Package,
  Maximize2,
  FileDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-custom bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-custom border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
SecondaryButton.displayName = "SecondaryButton";

export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-custom p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";

export function UploadButton({ onClick }: { onClick? : () => void }) {
  return (
    // <PrimaryButton onClick={onClick} className="gap-2">
    <PrimaryButton className="gap-2">
      <ArrowDown className="h-4 w-4" />
      <span>Upload Images</span>
    </PrimaryButton>
  );
}

export function ConvertButton({
  onClick,
  isConverting,
  disabled,
}: {
  onClick: () => void;
  isConverting?: boolean;
  disabled?: boolean;
}) {
  return (
    <PrimaryButton
      onClick={onClick}
      disabled={isConverting || disabled}
      className="gap-2"
    >
      {isConverting ? (
        <>
          <RefreshCw className="h-4 w-4 animate-spin" />
          <span>Converting...</span>
        </>
      ) : (
        <>
          <FileDown className="h-4 w-4" />
          <span>Convert All</span>
        </>
      )}
    </PrimaryButton>
  );
}


export function DeleteallButton({
  onClick,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <PrimaryButton onClick={onClick} className="gap-2 text-red-500">
      <Trash className="h-4 w-4 " />
      <span className=" text-white">Delete All</span>
    </PrimaryButton>
  );
}


export function ConvertSingleButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:bg-blue-900/20 [--convertsinglescale:1] hover:[--convertsinglescale:1.25]"
      title="Convert"
    >
      <FileDown className="h-4 w-4 scale-[var(--convertsinglescale)] transition-all duration-300" />
    </IconButton>
  );
}

export function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton
      onClick={onClick}
      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:text-red-400 dark:hover:bg-red-900/20 [--removescale:1] hover:[--removescale:1.25] "
      title="Remove"
    >
      <Trash className="h-4 w-4 scale-[var(--removescale)] transition-all duration-300" />
    </IconButton>
  );
}

export function ResizeButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton
      onClick={onClick}
      className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:text-amber-500 dark:hover:text-amber-400 dark:hover:bg-amber-900/20  [--resizescale:1] hover:[--resizescale:1.25] "
      title="Resize"
    >
      <Maximize2 className="h-4 w-4  scale-[var(--resizescale)] transition-all duration-300" />
    </IconButton>
  );
}

export function DownloadButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton
      onClick={onClick}
      className="text-green-600 hover:text-green-700 hover:bg-green-50 dark:text-green-500 dark:hover:text-green-400 dark:hover:bg-green-900/20  [--downloadscale:1] hover:[--downloadscale:1.25] "
      title="Download"
    >
      <Download className="h-4 w-4  scale-[var(--downloadscale)] transition-all duration-300" />
    </IconButton>
  );
}

export function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton
      onClick={onClick}
      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:text-red-400 dark:hover:bg-red-900/20  [--deletescale:1] hover:[--deletescale:1.25] "
      title="Delete"
    >
      <Trash className="h-4 w-4  scale-[var(--deletescale)] transition-all duration-300" />
    </IconButton>
  );
}

export function ZipOptionsButton({
  onClick,
  showZipOptions,
}: {
  onClick: () => void;
  showZipOptions: boolean;
}) {
  return (
    <SecondaryButton onClick={onClick} className="gap-2">
      <Package className="h-4 w-4" />
      <span>{showZipOptions ? "Hide ZIP Options" : "ZIP Options"}</span>
    </SecondaryButton>
  );
}

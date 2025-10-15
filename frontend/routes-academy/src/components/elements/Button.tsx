import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Button({
  onClick,
  children,
  className = "",
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`cursor-pointer bg-[#172554] px-8 text-white py-2 rounded-lg 
        text-[18px] font-normal transition-all hover:bg-[#233778]
        disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? "Submitting..." : children}
    </button>
  );
}

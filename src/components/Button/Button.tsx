import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "clear" | "clearSecondary" | "filled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: { [key in ButtonVariant]: string } = {
  clear: "text-orange hover:text-white active:text-grayPrimary",
  clearSecondary: "text-grayPrimary hover:text-orange active:text-white",
  filled:
    "text-lg px-12 py-3 bg-orange uppercase hover:opacity-80 hover:text-grayLight active:text-white ",
};

export default function Button({
  className = "",
  children,
  disabled = false,
  style,
  variant = "filled",
  ...otherProps
}: ButtonProps) {
  const variantClass = variantClasses[variant] || "";

  return (
    <button
      className={` duration-300  ${className} ${variantClass} `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

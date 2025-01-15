import React from "react";

type Variant = "solid" | "outline" | "ghost" | "underline";
type Size = "small" | "medium" | "large";
type ButtonType = "button" | "submit";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  type?: ButtonType;
  color?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "medium",
  color = "--primary-color",
  type = "button",
  disabled = false,
  onClick,
  children,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      style={{ "--btn-color": `var(${color})` } as React.CSSProperties}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import { ButtonHTMLAttributes } from "react";

type ButtonSecondaryProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonSecondary({
  children,
  className,
  ...otherProps
}: ButtonSecondaryProps) {
  return (
    <button
      type="button"
      className={`rounded-full bg-white w-[40px] h-[40px] shadow-custom flex justify-center items-center ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

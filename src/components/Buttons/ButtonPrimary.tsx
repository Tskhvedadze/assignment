import { ButtonPrimaryProps } from "../../types";

export function ButtonPrimary({
  children,
  large,
  className,
  ...otherProps
}: ButtonPrimaryProps) {
  return (
    <button
      type="button"
      className={`rounded-full bg-primary_light ${
        large ? "px-[15px] py-[18px]" : "p-2"
      } ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

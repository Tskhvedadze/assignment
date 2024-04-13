import { ButtonHTMLAttributes } from "react";

type ButtonPrimaryProps = {
  children: React.ReactNode;
  large?: true;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSecondaryProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type { ButtonPrimaryProps, ButtonSecondaryProps };

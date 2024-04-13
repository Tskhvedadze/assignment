import { TagProps } from "../types";

export function Tag({ children }: TagProps) {
  return (
    <p className="small-text px-2 py-[6px] rounded-[16px] bg-main_bg">
      {children}
    </p>
  );
}

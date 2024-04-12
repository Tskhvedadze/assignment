type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <p className=" font-[700] font-noto px-2 py-[6px] rounded-[16px] bg-main_bg">
      {children}
    </p>
  );
}

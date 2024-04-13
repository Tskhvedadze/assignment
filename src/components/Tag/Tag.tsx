type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <p className="small-text px-2 py-[6px] rounded-[16px] bg-main_bg">
      {children}
    </p>
  );
}

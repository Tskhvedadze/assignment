import { Header } from "../components";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="bg-main_bg py-[42px] px-[56px] h-svh">
        <div className="w-full max-w-[1280px] mx-auto">{children}</div>
      </div>
    </>
  );
}

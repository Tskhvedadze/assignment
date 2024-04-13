import { Header } from "../components/Header/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="bg-main_bg mobile:py-[42px] mobile:px-[36px] ">
        <div className="w-full max-w-[1280px] mx-auto py-4">{children}</div>
      </div>
    </>
  );
}

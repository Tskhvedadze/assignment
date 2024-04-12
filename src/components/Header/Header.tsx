import { Navigation } from "./Navigation";
import { SearchInput } from "./SearchInput";
import Logo from "../../assets/svg/Logo.svg?react";

export function Header() {
  return (
    <header className="flex items-center justify-between max-w-[1280px] mx-auto">
      <div className="flex max-w-[838px] w-full items-center">
        <Logo />
        <div className=" w-[2px] h-[32px] rounded-[62px] bg-main_bg mx-6" />
        <Navigation />
      </div>

      <SearchInput onSearch={(searchTerm) => console.log(searchTerm)} />
    </header>
  );
}

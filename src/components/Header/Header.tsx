import { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import { Navigation } from "./Navigation";
import { SearchInput } from "./SearchInput";
import { ButtonPrimary } from "../Buttons/ButtonPrimary";

import { headerData } from "../../assets/data";

import Logo from "../../assets/svg/Logo.svg?react";
import Instagram from "../../assets/svg/Instagram.svg?react";
import Facebook from "../../assets/svg/Facebook.svg?react";
import Burger from "../../assets/svg/burger.svg?react";

export function Header() {
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false);

  const breakpoint = useMediaQuery();

  useEffect(() => {
    setIsBurgerMenuVisible(false);
  }, [breakpoint]);

  const burgerMenuToggle = () => {
    setIsBurgerMenuVisible((prev) => !prev);
  };

  return (
    <header className="px-4 tablet:px-14 desktopSM:px-12 relative">
      <div className="flex items-center justify-between gap-5 max-w-[1280px] mx-auto py-[32px]">
        <div className="flex tablet:max-w-[838px] tablet:w-full items-center">
          <Logo />
          {(breakpoint === "desktop" || breakpoint === "small") && (
            <>
              <div className=" w-[2px] h-[32px] rounded-[62px] bg-main_bg mx-6" />
              <Navigation />
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          {breakpoint !== "mobile" && (
            <div className="flex items-center gap-2">
              <ButtonPrimary>
                <Instagram />
              </ButtonPrimary>
              <ButtonPrimary>
                <Facebook />
              </ButtonPrimary>
            </div>
          )}

          <SearchInput onSearch={(searchTerm) => console.log(searchTerm)} />

          {(breakpoint === "tablet" || breakpoint === "mobile") && (
            <ButtonPrimary large onClick={burgerMenuToggle}>
              <Burger />
            </ButtonPrimary>
          )}
        </div>
      </div>

      {isBurgerMenuVisible && (
        <div className="absolute z-50 top-full left-0 right-0 w-full bg-white px-4 pb-[24px] mobile:pb-24 ">
          <ul className=" grid gap-10 pt-[34px] pb-12 mobile:pb-0 ">
            {headerData.map((data) => (
              <li key={data.id}>
                <a className=" body-uppercase" href={data.route}>
                  {data.text}
                </a>
              </li>
            ))}
          </ul>

          {breakpoint === "mobile" && (
            <div className="flex items-center justify-center gap-2">
              <ButtonPrimary>
                <Instagram />
              </ButtonPrimary>
              <ButtonPrimary>
                <Facebook />
              </ButtonPrimary>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

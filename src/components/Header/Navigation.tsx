import { useState } from "react";
import { headerData } from "../../assets/data";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Arrow from "../../assets/svg/Arrow.svg?react";

export function Navigation() {
  const [visible, setVisible] = useState(false);
  const breakpoint = useMediaQuery();

  const mouseEnterHandler = () => setVisible(true);
  const mouseLeaveHandler = () => setVisible(false);

  const slicePoint = breakpoint === "small" || breakpoint === "tablet" ? 3 : 4;

  return (
    <nav className="desktopSM:w-full flex gap-8 justify-center items-center">
      {headerData.slice(0, slicePoint).map((data) => (
        <li
          className=" list-none font-noto leading-6 font-medium text-black_600"
          key={data.id}
        >
          <a href={data.route}>{data.text}</a>
        </li>
      ))}
      <div
        className="relative font-noto leading-6 font-medium text-black_600 cursor-pointer"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <div className="flex">
          <p>სხვა</p>
          <Arrow
            className={`transition-transform transform ${
              visible ? "rotate-180" : ""
            }`}
          />
        </div>
        {visible && (
          <ul className="absolute left-0 top-full z-10 bg-white border border-gray-300  rounded shadow">
            {headerData.slice(slicePoint).map((data) => (
              <li
                className="text-black_600 text-nowrap py-2 px-4 w-full"
                key={data.id}
              >
                <a href={data.route}>{data.text}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { Breakpoints } from "../types";

export const useMediaQuery = (): Breakpoints => {
  const [breakpoint, setBreakpoint] = useState<Breakpoints>("mobile");

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth < 600) {
        setBreakpoint("mobile");
      } else if (window.innerWidth <= 1024) {
        setBreakpoint("tablet");
      } else if (window.innerWidth <= 1240) {
        setBreakpoint("small");
      } else {
        setBreakpoint("desktop");
      }
    };

    window.addEventListener("resize", updateBreakpoint);
    updateBreakpoint();

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
};

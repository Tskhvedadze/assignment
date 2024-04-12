import { useState, useEffect } from "react";

type Breakpoint = "desktop" | "small" | "tablet" | "mobile";

export const useMediaQuery = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("mobile");

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

"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface ScrollContextType {
  scrolled: boolean;
}

export const ScrollContext = createContext<ScrollContextType>({
  scrolled: false,
});

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Initialize the scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrolled }}>
      {children}
    </ScrollContext.Provider>
  );
}

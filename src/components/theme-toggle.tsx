"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { ScrollContext } from "@/components/scroll-context";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { scrolled } = useContext(ScrollContext);

  // Check if we need to use light text/icon (on dark backgrounds or in dark mode)
  const isScrolled = scrolled !== undefined ? scrolled : false;
  const useLightColor = !isScrolled || theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className={cn(
        "hover:bg-transparent",
        useLightColor
          ? "text-white hover:text-white/90"
          : "text-foreground hover:text-foreground/90"
      )}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute top-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </motion.div>
    </Button>
  );
}

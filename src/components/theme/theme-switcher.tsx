"use client";
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

import { Button } from "../ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {/* {theme === "light" ? <LucideMoon /> : <LucideSun />} */}
        <LucideMoon className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <LucideSun className="absolute w-4 h-4 rotate-180 scale-0 transition-transform dark:-rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export { ThemeSwitcher };

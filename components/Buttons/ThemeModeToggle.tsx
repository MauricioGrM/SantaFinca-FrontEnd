"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render fallback while waiting for client mount (avoid mismatch)
    <button onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
      <SunIcon />
    </button>;
  }

  return (
    <>
      <button onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
}

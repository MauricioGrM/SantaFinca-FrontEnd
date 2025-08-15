"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavLogo() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 100, height: 50 }} />;
  }
  return (
    <Image
      src={isDarkMode ? "/LightLogo.svg" : "/DarkLogo.svg"}
      width={100}
      height={50}
      alt="Picture of the author"
    />
  );
}

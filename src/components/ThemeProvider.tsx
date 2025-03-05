"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure theme toggle only works after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true);
    
    // Log the current theme on mount
    if (typeof window !== &rsquo;undefined&rsquo;) {
      console.log("Initial theme:", document.documentElement.classList.contains(&rsquo;dark&rsquo;) ? &rsquo;dark&rsquo; : &rsquo;light&rsquo;);
    }
  }, []);

  // Use a simple wrapper when not mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="contents">{children}</div>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

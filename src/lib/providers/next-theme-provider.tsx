"use client";

import { FC } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemesProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
};

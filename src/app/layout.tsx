import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import React from "react";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-notoSans",
});

export const metadata: Metadata = {
  title: "About me",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body className="bg-black max-w-[412px] mx-auto overflow-auto">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

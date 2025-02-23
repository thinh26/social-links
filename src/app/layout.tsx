import type { Metadata } from "next";

import "./globals.css";
import DarkMode from "@/component/DarkMode";

export const metadata: Metadata = {
  title: "Contact me",
  description: "Contact me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkMode>{children}</DarkMode>
    </html>
  );
}

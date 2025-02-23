"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { Inter } from "next/font/google";
import { type PropsWithChildren, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
});

function DarkMode({ children }: Readonly<PropsWithChildren>) {
  const [darkModeStatus, setDarkModeStatus] = useState<boolean>(true);

  const handleClick = () => setDarkModeStatus(!darkModeStatus);

  return (
    <body
      data-theme={darkModeStatus ? "dark" : "light"}
      className={`m-0 p-0 text-justify box-border ${inter.className} dark:bg-black`}
    >
      <div className="fixed w-full pt-5 pr-5 z-[999] flex flex-col items-end cursor-pointer">
        {darkModeStatus ? (
          <FaSun color="#FFFFFF" size={25} onClick={handleClick} />
        ) : (
          <FaMoon color="" size={25} onClick={handleClick} />
        )}
      </div>
      {children}
    </body>
  );
}

export default DarkMode;

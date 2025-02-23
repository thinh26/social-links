"use client";
import { FaSun, FaMoon } from "react-icons/fa";

function DarkMode() {
  return (
    <div className="fixed w-full pt-5 pr-5 z-[999] flex flex-col items-end">
      <FaSun color="#FFFFFF" size={25} />
    </div>
  );
}

export default DarkMode;

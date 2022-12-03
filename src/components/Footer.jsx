import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto py-8 border-t-4">
        <div className="flex items-center m-auto justify-center">
            <BsChatSquareDots size={30} className="text-[var(--primary-dark)] mr-2" />
            <h1 className="text-xl font-bold text-gray-700">WHINX</h1>
        </div>
    </div>
  )
}
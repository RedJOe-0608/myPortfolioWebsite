import React from "react";
import { CircularText } from "./Icons";
import { motion } from "framer-motion";
import Link from "next/link";
const circularText = {
  intitial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const HireMe = () => {
  return (
    <div className="fixed z-10 left-4 hire-me bottom-4 md:!top-0 md:left-auto md:bottom-auto md:right-2 md:absolute flex items-center justify-center overflow-hidden sm:right-0">
      <div className="w-48 xs:!w-28 XsToSm:!w-28 SmToMd:!w-28 lg:!w-40  relative h-auto flex items-center justify-center  ">
        <CircularText className="animate-spin-slow dark:fill-light" />
        <Link
          href="mailto:joeswaroopmakena@gmail.com"
          className="flex items-center justify-center absolute bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition duration-200 
          dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:!w-[3.2rem] md:!h-[3.2rem] lg:w-16 lg:h-16 lg:text-[13px] md:!text-[10.3px]
          "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

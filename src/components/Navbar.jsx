import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import TwitterIcon, {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { AnimatePresence, motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const router = useRouter();

  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link href={href} className={`${className} relative group `}>
        {title}
        <span
          className={`bg-dark h-[1px] absolute inline-block -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };
  const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const handleClick = () => {
      router.push(href);
      toggle();
    };

    return (
      <button
        onClick={handleClick}
        className={`${className} relative group dark:text-dark text-light `}
      >
        {title}
        <span
          className={`bg-dark h-[1px] absolute inline-block -bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark bg-light`}
        >
          &nbsp;
        </span>
      </button>
    );
  };

  return (
    <header className=" dark:text-light w-full px-32 py-8 font-medium flex items-center justify-between z-10 relative lgSkills:!px-16 MdToLg:!px-16 SmToMd:!px-12 sm:!px-8 ">
      <button
        onClick={handleClick}
        className=" flex-col justify-center items-center hidden lg:flex mt-[0.5rem]"
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light my-0.5 block h-0.5 w-6 rounded-sm  ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition duration-300 ease-in-out  h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="dark:text-light text-dark">
          <CustomLink href="/" title="Home" className="mr-4  " />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
        </nav>
        <nav className="flex justify-between mx-4 items-center">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-4"
            href="https://twitter.com"
            target="_blank"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-4"
            href="https://linkedin.com"
            target="_blank"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-4"
            href="https://github.com"
            target="_blank"
          >
            <GithubIcon />
          </motion.a>
          <button
            className={`ml-4 flex items-center justify-center p-1 rounded-full ${
              mode === "light" ? "bg-dark text-light" : "text-dark bg-light"
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, type: "spring" }}
            className="min-w-[70vw] z-10 bg-dark/90  dark:bg-light/75 rounded-lg backdrop-blur-md py-32 sm:!py-24 flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-between items-center "
          >
            <nav className="flex flex-col items-center justify-center my-6">
              <CustomMobileLink
                href="/"
                title="Home"
                className="my-4"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className="my-4"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                className="my-4"
                toggle={handleClick}
              />
              {/* <CustomMobileLink
                href="/articles"
                title="Articles"
                className="my-4"
                toggle={handleClick}
              /> */}
            </nav>
            <nav className="flex justify-between items-center flex-wrap">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-4"
                href="https://twitter.com/RedJOe_0608"
                target="_blank"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-4"
                href="https://www.linkedin.com/in/jyothiswaroopmakena/"
                target="_blank"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 ml-4 bg-light rounded-full dark:bg-dark"
                href="https://github.com/RedJOe-0608"
                target="_blank"
              >
                <GithubIcon />
              </motion.a>
              <button
                className={`ml-6 flex items-center justify-center p-1 rounded-full ${
                  mode === "light" ? "bg-dark text-light" : "text-dark bg-light"
                }`}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "dark" ? (
                  <SunIcon className="fill-dark" />
                ) : (
                  <MoonIcon className="fill-dark" />
                )}
              </button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  // for my OS configuration
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userpref = window.localStorage.getItem("theme");
    console.log("----Use Effect 1----");

    const handleChange = () => {
      // if local storage exists
      if (userpref) {
        let check = userpref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";

        setMode(check);
        window.localStorage.setItem("theme", check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    // console.log(mediaQuery);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    console.log("----Use Effect 2----");
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return [mode, setMode];
};

export default useThemeSwitcher;

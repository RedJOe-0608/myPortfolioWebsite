import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} w-full h-full bg-light z-0 p-32 xl:p-24 lg:p-16 md:p-10 sm:p-8 dark:bg-dark`}
    >
      {children}
    </div>
  );
};

export default Layout;

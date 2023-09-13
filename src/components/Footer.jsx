import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-md border-t-2 dark:border-light dark:text-light text-dark border-dark sm:text-base ">
      <Layout className="py-8 flex justify-between items-center lg:flex-col lg:py-6 sm:!p-16">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <Link className="lg:py-2" href="/">
          Jyothi Swaroop Makena &hearts;
        </Link>
        <Link
          href="https://www.linkedin.com"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

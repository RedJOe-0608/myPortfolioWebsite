import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1,
  },
};

const AnimatedText = ({ text, py, className = "" }) => {
  console.log(text.split(" ").length);
  return (
    <motion.div className="w-full flex items-center justify-center text-center mx-auto py-2 sm:py-0">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} inline-block capitalize font-bold text-8xl`}
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              variants={singleWord}
              className={` ${
                py ? py : "py-1"
              } text-design-light dark:text-design-dark inline-block`}
              key={index}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedText;

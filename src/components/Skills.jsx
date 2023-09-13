import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex justify-center items-center rounded-full bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 cursor-pointer shadow-dark absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold 
      smSkills:text-xs
      
      "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <AnimatedText
        text="Skills"
        className="font-bold text-8xl md:!text-7xl xs:!text-5xl md:mt-32 w-full text-center mt-64"
      />
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lgSkills:bg-circularLightLg lgSkills:dark:bg-circularDarkLg mdSkills:bg-circularLightMd mdSkills:dark:bg-circularDarkMd smSkills:bg-circularLightSm smSkills:dark:bg-circularDarkSm
        xsSkills:bg-circularLightXs xsSkills:dark:bg-circularDarkXs
      "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center items-center rounded-full bg-dark text-light dark:bg-light dark:text-dark p-6 cursor-pointer shadow-dark lg:p-4 xs:text-xs xsw:p-2 "
        >
          Web
        </motion.div>
        <Skill name="HTML" x="13vw" y="3vw" />
        <Skill name="CSS" x="-5vw" y="-12vw" />
        <Skill name="Js" x="-20vw" y="-12vw" />
        <Skill name="React" x="29vw" y="12vw" />
        <Skill name="Node.Js" x="20vw" y="-12vw" />
        <Skill name="Mongo.DB" x="-20vw" y="12vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-20.5vw" />
        <Skill name="Next.Js" x="-21vw" y="0vw" />
        <Skill name="Figma" x="36vw" y="0vw" />
        <Skill name="Firebase" x="0vw" y="21vw" />
      </div>
    </>
  );
};

export default Skills;

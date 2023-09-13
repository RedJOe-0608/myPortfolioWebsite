import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/about-img2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { motion } from "framer-motion";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";

const About = () => {
  const isSmall = useMediaQuery("(max-width: 1040px)");
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About page of my portfolio"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex flex-col dark:text-light items-center justify-center w-full">
        <Layout className="pt-16 xl:!p-12 XsToSm:!p-8 xs:!p-4 ">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className=" !text-[5.5rem] lg:!text-[5rem] sm:!text-[3.75rem] xsSkills:!text-[3rem] inline-block xsSkills:mb-8 mb-16"
          />
          <div className="flex justify-between aboutlg:flex-col-reverse w-full">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={
                isSmall
                  ? { duration: 1, type: "spring" }
                  : { duration: 1, delay: 1.7, type: "spring" }
              }
              className=" flex flex-col text-gray-700 dark:text-light w-[50%]  justify-center sm:text-base text-md aboutlg:w-full aboutlg:mt-16 xs:!w-[90%] xs:mx-auto"
            >
              <h2 className="mb-4 text-xl text-dark/75 dark:text-light/75  font-bold uppercase">
                About Me
              </h2>
              <p>
                Hi, my name is Jyothi Swaroop Makena, a full-stack-developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. I am excited to embark on a journey in the world of web development and showcase my skills to the tech community.
                <br />
                <br />
              </p>
              <p>
                I believe that design is about more than just making things look
                pretty. 
                <br />
                <br />
              </p>
              <p>
                It's about solving problems and creating intuitive, enjoyable
                experiences for users. - Whether I'm working on a website, or other digital product, I bring my commitment to
                design excellence and user-centered thinking to every project I
                work on.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 1.7, type: "spring" }}
              className="  w-[40%]  bg-light dark:bg-dark dark:border-light relative border-2 p-4 border-dark rounded-2xl border-solid flex items-center aboutlg:w-[70%] aboutlg:mx-auto"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 3 }}
                className="absolute top-[0.4rem] -right-3 bg-dark w-[102%] h-[102%] rounded-[2rem] -z-10 dark:bg-light"
              />
              <Image
                src={profilePic}
                alt="Image for about"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-full relative rounded-2xl"
              />
            </motion.div>
          </div>
          <Skills />
          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;

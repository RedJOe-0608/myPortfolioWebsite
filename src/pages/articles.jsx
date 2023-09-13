import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create modal component in react using react portals.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const LatestArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark shadow-2xl dark:shadow-light dark:shadow-lg border border-dark border-solid dark:border-light rounded-2xl dark:text-light text-dark">
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt="latest article"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl hover:underline underline-offset-2 font-bold my-2 mt-4 xs:!text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 md:text-xs">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold sm:text-sm">
        {time}
      </span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", ease: "easeInOut" }}
      className="w-full relative p-4 py-6 my-8 rounded-xl flex items-center justify-between bg-light shadow-xl dark:bg-dark dark:shadow-md dark:shadow-light first:mt-0 border border-r-4 border-b-4 border-dark sm:flex-col dark:text-light text-dark"
    >
      <Link href="/" target="_blank">
        <h2 className="capitalize text-lg md:text-md font-semibold hover:underline underline-offset-2">
          {title}
        </h2>
        <Image
          src={img}
          alt="article"
          className="w-96 h-auto hidden absolute rounded-lg"
        />
      </Link>
      <span className="text-primary dark:text-primaryDark font-semibold sm:self-start sm:pl-0 xs:text-sm sm:mt-2">
        {date}
      </span>
    </motion.li>
  );
};

const Articles = () => {
  const isSmall = useMediaQuery("(max-width: 769px)");
  console.log(isSmall);
  return (
    <>
      <Head>
        <title>Articles Page</title>
        <meta name="description" content="Articles Page Of My Portfolio"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16 sm:!p-[2rem] SmToMd:!p-[5rem] MdToLg:!p-12  ">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
            py="py-2"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 1 }}
            >
              <LatestArticle
                img={article1}
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                time="9 min read"
                summary="This is a dummy article placeholder."
                link="/"
              />
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={isSmall ? { duration: 1 } : { delay: 2, duration: 1 }}
            >
              <LatestArticle
                img={article1}
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                time="9 min read"
                summary="This is a dummy article placeholder."
                link="/"
              />
            </motion.div>
          </ul>
          <AnimatedText
            text="All Articles"
            className="font-bold text-6xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl w-full text-center my-16 mt-32"
          />

          <ul>
            <Article
              title="Dummy Article Placeholder"
              img={article2}
              date="12th June, 2023"
              link="/"
            />
            <Article
              title="Dummy Article Placeholder"
              img={article2}
              date="12th June, 2023"
              link="/"
            />

            <Article
              title="Dummy Article Placeholder"
              img={article2}
              date="12th June, 2023"
              link="/"
            />
            <Article
             title="Dummy Article Placeholder"
              img={article2}
              date="12th June, 2023"
              link="/"
            />
            <Article
              title="Dummy Article Placeholder"
              img={article2}
              date="12th June, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;

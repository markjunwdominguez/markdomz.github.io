import { memo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HeroText = () => {
  return (
    <motion.div
      className="select-none text-left md:text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={itemVariants} className="text-xl font-bold text-blue-400">
        Hi, I'm
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="mt-3 text-5xl font-bold tracking-tight text-white md:text-7xl"
      >
        Mark Domz
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="mx-auto mt-4 grid min-h-[88px] max-w-[720px] place-items-center text-2xl font-medium leading-tight text-blue-400 md:min-h-[104px] md:text-4xl"
      >
        <span className="block min-w-0 text-center sm:whitespace-nowrap">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1800,
              "AI-Driven Solutions Builder",
              2200,
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </span>
      </motion.div>

      <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/74 md:text-center">
        I build modern desktop, web, and management systems that make work smarter and more efficient.
      </motion.p>

      <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4 md:justify-center">
        <a href="#projects" className="rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600">
          View Projects
        </a>

        <a href="#contact" className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
          Contact Me
        </a>
      </motion.div>
    </motion.div>
  );
};

export default memo(HeroText);

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { fadeUp } from "../../animations/variants";

type SectionProps = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
}>;

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 ${className}`}>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyanGlow">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

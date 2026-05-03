import { motion } from "framer-motion";
import { ArrowRight, Cpu, ShieldCheck, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/variants";

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.32em] text-cyanGlow">Developer Showcase System</motion.p>
        <motion.h1 variants={fadeUp} className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-7xl">
          Serious systems with cinematic product polish.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
          I build operational software that feels sharp, reliable, and ready for real people under real pressure.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-cyanGlow px-5 py-3 text-sm font-bold text-ink shadow-glow">
            View systems <ArrowRight size={16} />
          </a>
          <a href="#contact" className="rounded-full border border-white/12 bg-white/[0.055] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl">Start a project</a>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative">
        <div className="absolute -inset-8 rounded-full bg-cyanGlow/10 blur-3xl" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-glow backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#10131B] p-5">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Build Console</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Live</span>
            </div>
            <div className="grid gap-3">
              {[
                [Cpu, "Electron systems", "Desktop-grade workflows"],
                [ShieldCheck, "Secure data flows", "Role-aware operations"],
                [Sparkles, "Premium UX", "Fast, animated, polished"],
              ].map(([Icon, title, detail]) => (
                <div key={String(title)} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <span className="rounded-xl bg-cyanGlow/10 p-3 text-cyanGlow"><Icon size={20} /></span>
                  <span><b className="block text-white">{String(title)}</b><small className="text-white/52">{String(detail)}</small></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { memo } from "react";
import { motion } from "framer-motion";

const rows = ["Maria Santos", "John Reyes", "Alyssa Cruz", "Daniel Tan"];

export const IMPMSPreview = memo(function IMPMSPreview() {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#10131B] p-3">
      <motion.div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-cyanGlow/20 blur-2xl" animate={{ x: [0, -20, 10, 0], y: [0, 16, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <div className="grid h-full grid-cols-[52px_1fr] gap-3">
        <motion.aside className="rounded-xl border border-white/10 bg-white/[0.06] p-2" animate={{ opacity: [0.55, 1, 0.7, 1] }} transition={{ duration: 4.8, repeat: Infinity }}>
          <div className="mb-4 h-7 rounded-lg bg-cyanGlow/80" />
          {[0, 1, 2, 3].map((i) => (
            <motion.div key={i} className="mb-2 h-6 rounded-lg bg-white/10" animate={{ x: [0, i % 2 ? 2 : -2, 0] }} transition={{ duration: 2.8 + i, repeat: Infinity }} />
          ))}
        </motion.aside>
        <main className="min-w-0 rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="h-3 w-24 rounded-full bg-white/70" />
              <div className="mt-2 h-2 w-16 rounded-full bg-white/20" />
            </div>
            <motion.div className="rounded-lg border border-cyanGlow/30 bg-cyanGlow/10 px-2 py-1 text-[10px] font-semibold text-cyanGlow" animate={{ opacity: [0.65, 1, 0.65] }} transition={{ duration: 1.5, repeat: Infinity }}>
              09:42 AM
            </motion.div>
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            {["Records", "On Duty", "Pending"].map((label, index) => (
              <motion.div key={label} className="rounded-xl border border-white/10 bg-white/[0.055] p-2" animate={{ y: [0, -3, 0] }} transition={{ duration: 3 + index, repeat: Infinity }}>
                <div className="h-2 w-10 rounded-full bg-white/25" />
                <div className="mt-2 h-4 w-8 rounded-full bg-cyanGlow/60" />
              </motion.div>
            ))}
          </div>
          <div className="space-y-2">
            {rows.map((row, index) => (
              <motion.div key={row} className="relative flex items-center justify-between overflow-hidden rounded-lg bg-white/[0.045] px-2 py-2" animate={{ opacity: [0.72, 1, 0.8] }} transition={{ duration: 2.6, delay: index * 0.2, repeat: Infinity }}>
                <motion.span className="absolute inset-y-0 left-0 w-8 bg-white/10 blur-md" animate={{ x: [-40, 250] }} transition={{ duration: 2.5, delay: index * 0.35, repeat: Infinity, repeatDelay: 1.5 }} />
                <span className="relative text-[10px] text-white/76">{row}</span>
                <span className={`relative h-2 w-2 rounded-full ${index === 1 ? "bg-violetGlow" : "bg-cyanGlow"}`} />
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
});

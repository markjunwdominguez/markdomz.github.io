import { memo } from "react";
import { motion } from "framer-motion";

export const GenericSystemPreview = memo(function GenericSystemPreview() {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#11101A] p-4">
      <div className="grid h-full grid-rows-[1fr_auto] gap-3">
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((item) => (
            <motion.div key={item} className="rounded-2xl border border-white/10 bg-white/[0.055]" animate={{ y: [0, -8, 0], opacity: [0.75, 1, 0.8] }} transition={{ duration: 3 + item, repeat: Infinity }} />
          ))}
        </div>
        <div className="space-y-2">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-2">
              <span className="h-2 w-2 rounded-full bg-cyanGlow" />
              <span className="h-2 flex-1 rounded-full bg-white/20" />
              <span className="h-2 w-10 rounded-full bg-violetGlow/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

import { motion } from "framer-motion";
import { Activity, Database, Gauge, Lock } from "lucide-react";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { Section } from "../ui/Section";

const capabilities = [
  { icon: Database, title: "Data-first architecture", copy: "Typed models, durable storage, clean operational flows." },
  { icon: Gauge, title: "Fast interfaces", copy: "GPU-friendly motion, responsive layouts, and focused state." },
  { icon: Lock, title: "Admin-ready controls", copy: "Role-aware surfaces, audit-friendly actions, and sane defaults." },
  { icon: Activity, title: "Live dashboards", copy: "Monitoring screens designed for scanning and repeated action." },
];

export default function Systems() {
  return (
    <Section id="systems" eyebrow="Engineering Signal" title="Built for products that need to look premium and behave predictably.">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map(({ icon: Icon, title, copy }) => (
          <motion.div key={title} variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
            <Icon className="text-cyanGlow" size={24} />
            <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/58">{copy}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { fadeUp } from "../../animations/variants";
import { Section } from "../ui/Section";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => setLoading(false), 900);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Bring me the system that needs to feel serious.">
      <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} onSubmit={onSubmit} className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-violet backdrop-blur-xl sm:grid-cols-2">
        <input className="form-field" placeholder="Name" required />
        <input className="form-field" placeholder="Email" type="email" required />
        <input className="form-field sm:col-span-2" placeholder="Project type" />
        <textarea className="form-field min-h-36 resize-none sm:col-span-2" placeholder="What are we building?" required />
        <button disabled={loading} className="inline-flex w-fit items-center gap-2 rounded-full bg-cyanGlow px-5 py-3 text-sm font-bold text-ink transition hover:shadow-glow disabled:opacity-70">
          {loading ? "Sending..." : "Send signal"} <Send size={16} />
        </button>
      </motion.form>
    </Section>
  );
}

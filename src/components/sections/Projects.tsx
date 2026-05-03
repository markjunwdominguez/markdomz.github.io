import { memo, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import { fadeUp, modalSpring, staggerContainer } from "../../animations/variants";
import { Section } from "../ui/Section";
import { IMPMSPreview } from "../preview/IMPMSPreview";
import { GenericSystemPreview } from "../preview/GenericSystemPreview";

function Preview({ project }: { project: Project }) {
  if (project.id === "impms") return <IMPMSPreview />;
  return <GenericSystemPreview />;
}

const ProjectCard = memo(function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={() => onSelect(project)}
      whileHover={{ rotateX: 4, rotateY: -5, y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative min-h-[470px] rounded-3xl border border-white/10 bg-white/[0.055] p-4 text-left shadow-glow backdrop-blur-xl transform-gpu"
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(56,213,255,0.24),transparent_48%)]" />
      <div className="relative">
        <Preview project={project} />
        <div className="p-2 pt-5">
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 min-h-16 text-sm leading-6 text-white/62">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs text-white/72">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
});

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const handleSelect = useCallback((project: Project) => setSelected(project), []);

  return (
    <Section id="work" eyebrow="Selected Work" title="Data-driven project cards that open like product demos.">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.id} project={project} onSelect={handleSelect} />)}
      </motion.div>
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-ink/72 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.article variants={modalSpring} initial="hidden" animate="visible" exit="exit" onClick={(event) => event.stopPropagation()} className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#10131B] p-5 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow">System Detail</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">{selected.title}</h3>
                </div>
                <button aria-label="Close modal" onClick={() => setSelected(null)} className="rounded-full border border-white/10 p-2 text-white/70 hover:text-white"><X size={18} /></button>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <Preview project={selected} />
                <div>
                  <p className="text-white/66">{selected.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{selected.tech.map((tech) => <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/72">{tech}</span>)}</div>
                  <div className="mt-8 flex gap-3">
                    <a className="inline-flex items-center gap-2 rounded-full bg-cyanGlow px-4 py-2 text-sm font-bold text-ink" href={selected.demo ?? "#"}><ExternalLink size={15} /> Demo</a>
                    <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white" href={selected.github ?? "#"}><Github size={15} /> Code</a>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

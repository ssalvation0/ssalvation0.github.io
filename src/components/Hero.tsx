import { motion, type Variants } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="bg-glow relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-5 py-24">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Status pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.status}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-sm text-accent"
          >
            Web Developer · Lublin, Poland
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
          >
            {profile.name}.
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-muted sm:text-5xl"
          >
            I build <span className="text-gradient">full-stack</span> web apps,
            end to end.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              View my work <FiArrowUpRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <FiArrowDown />
          </motion.span>
          Scroll down
        </motion.a>
      </div>
    </section>
  );
}

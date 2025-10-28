import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-6 py-24 sm:py-28 md:flex-row md:items-center">
        <div className="z-10 max-w-2xl text-left text-slate-100">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-emerald-400" />
            <span>PHP Developer • Laravel • REST APIs</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Crafting robust backends and elegant web experiences.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            I build secure, performant applications with PHP, Laravel, and modern tooling —
            integrating clean APIs, optimized databases, and delightful UIs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 font-medium text-slate-900 shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              View Projects
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/70 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-slate-300/90">
            {[
              'PHP',
              'Laravel',
              'MySQL',
              'REST',
              'Docker',
              'Redis',
              'JavaScript',
              'TailwindCSS',
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700/60 bg-slate-900/50 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="pointer-events-none relative z-10 hidden flex-1 md:block" aria-hidden>
          {/* Empty spacer to balance layout on desktop; Spline runs full-bleed behind */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

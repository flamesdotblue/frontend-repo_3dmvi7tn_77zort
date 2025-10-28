import React from 'react';
import { Globe, Lock, Api, Database } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Billing API',
    icon: Api,
    stack: ['Laravel', 'MySQL', 'Stripe'],
    desc: 'Multi-tenant billing backend with webhooks, subscriptions, and usage-based pricing.',
    link: '#',
  },
  {
    title: 'Headless CMS',
    icon: Database,
    stack: ['Laravel', 'Postgres', 'Redis'],
    desc: 'Content API with role-based access control, caching, and rich media support.',
    link: '#',
  },
  {
    title: 'Secure Client Portal',
    icon: Lock,
    stack: ['Symfony', 'OAuth2', 'Docker'],
    desc: 'Encrypted document sharing, granular permissions, and audit trails.',
    link: '#',
  },
  {
    title: 'Global Storefront',
    icon: Globe,
    stack: ['Laravel', 'REST', 'Vue/React'],
    desc: 'Internationalized e‑commerce API with promotions, search, and analytics.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 text-slate-300">Real products and backends I loved building.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm hover:bg-slate-800 md:inline"
          >
            Get a quote
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map(({ title, icon: Icon, stack, desc, link }) => (
            <a
              key={title}
              href={link}
              className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-emerald-600/50 hover:bg-slate-900/70"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold group-hover:text-white">{title}</h3>
              <p className="mt-1 flex flex-wrap gap-1 text-xs text-emerald-300/90">
                {stack.map((s) => (
                  <span key={s} className="rounded-full border border-emerald-700/40 bg-emerald-900/10 px-2 py-0.5">
                    {s}
                  </span>
                ))}
              </p>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

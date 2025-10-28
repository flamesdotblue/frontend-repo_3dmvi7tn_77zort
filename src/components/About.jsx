import React from 'react';
import { Server, Database, ShieldCheck, Boxes } from 'lucide-react';

const skills = [
  { icon: Server, title: 'Backend APIs', desc: 'RESTful services with Laravel, Lumen, Symfony' },
  { icon: Database, title: 'Databases', desc: 'MySQL, PostgreSQL, query optimization, migrations' },
  { icon: ShieldCheck, title: 'Security', desc: 'Auth, OAuth2, Sanctum/Passport, rate limiting' },
  { icon: Boxes, title: 'DevOps', desc: 'Docker, CI/CD, queues, caching with Redis' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About me</h2>
          <p className="mt-3 text-slate-300">
            I’m a PHP developer focused on building secure, scalable backends and clean, delightful experiences.
            I love turning complex business requirements into maintainable code.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

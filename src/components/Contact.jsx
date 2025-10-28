import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">
              I’m available for freelance work, collaborations, and full‑time roles. Share a bit about your project and I’ll get back quickly.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <a
                href="mailto:you@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/70 px-4 py-2 hover:bg-slate-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/70 px-4 py-2 hover:bg-slate-800"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-600"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-600"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 outline-none focus:border-emerald-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400"
              >
                Send message
              </button>
              <p className="text-xs text-slate-400">
                This demo form doesn’t send data. Use the email button or connect it to your backend later.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

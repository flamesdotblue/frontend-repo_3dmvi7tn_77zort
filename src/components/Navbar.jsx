import React from 'react';
import { Code2, FolderGit2, User, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-slate-200">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-slate-900">
            <Code2 className="h-5 w-5" />
          </span>
          <span>PHP Dev Portfolio</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a href="#about" className="hover:text-white">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm hover:bg-slate-800"
          >
            <FolderGit2 className="h-4 w-4" />
            <span className="hidden sm:inline">Work</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Hire me</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

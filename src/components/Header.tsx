import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

const links = [
  { href: '#what-it-buys', label: 'What it buys' },
  { href: '#why', label: 'Why' },
  { href: '#who-benefits', label: 'Who benefits' },
  { href: '#not-for', label: 'Not for everyone' },
  { href: '#vs-renting', label: 'Vs. renting' },
  { href: '#milestones', label: 'Milestones' },
  { href: '#register', label: 'Register interest' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-bold text-slate-900">
            <Cpu className="h-6 w-6 text-cyan-600" />
            <span>Community Data Center</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-slate-900 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#register"
            className="hidden lg:inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Register interest
          </a>

          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-3 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

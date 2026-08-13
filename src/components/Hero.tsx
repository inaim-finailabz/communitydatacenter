import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { oneSentence, totalRaise } from '../data/content';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.15),transparent_40%)]" />
      <div className="relative container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-white/10 text-cyan-300 px-3 py-1.5 rounded-full mb-6">
            <MapPin className="h-3.5 w-3.5" />
            Lanarkshire, Scotland — Community Benefit Society
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            We're raising{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              £{totalRaise.toLocaleString()}
            </span>{' '}
            to put GPUs in members' hands, not a shareholder's balance sheet.
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-10">{oneSentence}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Register interest
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#what-it-buys"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              See what the money buys
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

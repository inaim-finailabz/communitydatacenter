import React from 'react';
import { milestones } from '../data/content';

const Milestones: React.FC = () => {
  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What success looks like</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-200 pl-8 space-y-10">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full bg-cyan-500 border-4 border-white ring-2 ring-cyan-500" />
                <h3 className="font-bold text-slate-900 mb-1">{m.year}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;

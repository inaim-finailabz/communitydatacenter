import React from 'react';
import { XCircle } from 'lucide-react';
import { whoDoesNotBenefit } from '../data/content';

const WhoDoesNotBenefit: React.FC = () => {
  return (
    <section id="not-for" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Who does not benefit</h2>
          <p className="text-slate-600 text-lg">
            Worth being direct, because a pitch that only lists winners isn't trustworthy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
          {whoDoesNotBenefit.map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoDoesNotBenefit;

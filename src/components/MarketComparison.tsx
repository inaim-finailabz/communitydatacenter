import React from 'react';
import { Scale, Check, X } from 'lucide-react';
import { marketComparisonRows } from '../data/content';

const MarketComparison: React.FC = () => {
  return (
    <section id="vs-renting" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <div className="inline-flex items-center gap-2 text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            <Scale className="h-3.5 w-3.5" />
            How this compares to renting
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            We're not claiming to be the cheapest GPU-hour
          </h2>
          <p className="text-slate-600 text-lg">
            We're claiming something more specific: priced in the same range as a normal commercial GPU
            rental, while giving you a stake and a vote that no renter — cheap or expensive — can offer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white text-left">
                  <th className="px-5 py-3.5 font-semibold">Dimension</th>
                  <th className="px-5 py-3.5 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <X className="h-3.5 w-3.5 text-slate-400" />
                      Renting from a commercial GPU cloud
                    </span>
                  </th>
                  <th className="px-5 py-3.5 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-cyan-400" />
                      Community Data Center membership
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {marketComparisonRows.map((row, i) => (
                  <tr key={row.dimension} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-5 py-4 font-medium text-slate-900 align-top">{row.dimension}</td>
                    <td className="px-5 py-4 text-slate-500 align-top">{row.renting}</td>
                    <td className="px-5 py-4 text-slate-700 align-top">{row.membership}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-6">
          {/* TODO(founder): the "≈$1.74/hr equivalent" figure is derived from the worked example in
              "Who benefits" (£12,000/yr capacity contract ≈ one GPU's continuous reserved capacity),
              not a published rate card — confirm the underlying assumption and GBP/USD rate before
              this goes live, and consider replacing it with an actual capacity-contract price list
              once one exists. */}
          <p className="text-xs text-slate-400 leading-relaxed">
            *Derived from the worked example above (£12,000/year for capacity equivalent to most of one
            GPU, continuous), not a published rate card — an illustration of where membership lands
            relative to the market, not a quoted price. Commercial rental figures are public marketplace
            ranges for H100-class GPUs, not a specific provider's quote, and marketplaces move fast — take
            them as indicative, not current-to-the-day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketComparison;

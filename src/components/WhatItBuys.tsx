import React from 'react';
import { Server } from 'lucide-react';
import { budgetLines, totalRaise } from '../data/content';

const WhatItBuys: React.FC = () => {
  return (
    <section id="what-it-buys" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              <Server className="h-3.5 w-3.5" />
              What the money buys
            </div>
            {/* TODO(founder): GPU count is a conservative placeholder sized to the £200,000 GPU-servers
                line at current H100 market pricing (~£25k-35k/unit landed in a server). Confirm the
                actual count, model, and new-vs-refurbished sourcing plan against a real supplier quote
                before this goes live — it's a legal detail of the raise, not just copy. */}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Six H100 GPUs, installed in an existing Scottish datacenter, owned by the people who use them.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              That's it. Not a building. Not a plan. Six H100 graphics processors in a rack in Lanarkshire,
              running eight to twelve weeks after the money is in — procurement and colo contracting take
              time.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We will not open the raise until we hold letters of intent covering at least half of Year 1
              capacity. If that commercial validation doesn't materialise, we don't ask anyone for money.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Released in four stages, each verified by an independent chartered accountant appointed by
              the board before the next is paid out. If we don't raise the full amount, nothing is called
              and nothing is owed.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              No salaries are drawn from this raise. Founding operational work is unpaid until the society
              reaches sustaining revenue.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {budgetLines.map((line) => (
                  <tr key={line.label} className="border-b border-slate-200 last:border-0">
                    <td className="px-6 py-3.5 text-slate-700">{line.label}</td>
                    <td className="px-6 py-3.5 text-right font-medium text-slate-900 whitespace-nowrap">
                      £{line.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-900 text-white">
                  <td className="px-6 py-4 font-bold">Total</td>
                  <td className="px-6 py-4 text-right font-bold whitespace-nowrap">
                    £{totalRaise.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItBuys;

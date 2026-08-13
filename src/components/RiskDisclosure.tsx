import React from 'react';
import { ShieldAlert } from 'lucide-react';

const points = [
  'You could lose some or all of the money you invest.',
  'Community shares are not covered by the Financial Services Compensation Scheme (FSCS).',
  'Shares are £1 each and can never be worth more than that — there is no capital growth.',
  'Interest is discretionary, targeted at around 3%, and is never guaranteed.',
  'Shares cannot be sold or transferred. Withdrawal is at the board’s discretion, subject to funds, and not available in the first three years.',
  'This is illiquid, long-term capital — only invest money you can afford to be without.',
];

const RiskDisclosure: React.FC = () => {
  return (
    <section id="risk" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-amber-400 mb-4">
            <ShieldAlert className="h-6 w-6" />
            <span className="text-xs font-semibold uppercase tracking-wider">Risk information</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Read this before you consider investing</h2>
          <ul className="space-y-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 leading-relaxed border-t border-white/10 pt-6">
            Capital at risk. Community shares are not covered by the Financial Services Compensation
            Scheme. This page is not a financial promotion and does not constitute an offer of shares.
            Nothing on this site should be treated as financial, tax or legal advice — take independent
            advice before making any investment decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiskDisclosure;

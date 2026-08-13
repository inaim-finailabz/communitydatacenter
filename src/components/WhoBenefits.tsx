import React from 'react';
import { GraduationCap, Building2, UserCheck, Landmark, Globe2, CheckCircle2 } from 'lucide-react';
import { beneficiaries, hostCommunityCommitments } from '../data/content';

const icons = [GraduationCap, Building2, UserCheck];

const WhoBenefits: React.FC = () => {
  return (
    <section id="who-benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Who benefits, specifically</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {beneficiaries.map((b, i) => {
            const Icon = icons[i];
            return (
              <div key={b.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col">
                <Icon className="h-8 w-8 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{b.summary}</p>
                <p className="text-slate-700 text-sm font-medium mb-3">
                  <span className="text-cyan-700">What changes: </span>
                  {b.change}
                </p>
                {b.also && <p className="text-slate-500 text-sm">{b.also}</p>}
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <Landmark className="h-8 w-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold mb-3">The community that hosts it</h3>
            <p className="text-slate-300 text-sm mb-4">
              Phase 1 uses an existing facility, so nothing new is built and nothing new is imposed on
              anyone. When we do eventually build, our commitments are written into governance, not
              marketing.
            </p>
            <ul className="space-y-2">
              {hostCommunityCommitments.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Scotland</h3>
              <p className="text-slate-600 text-sm">
                Employment, PAYE, employer National Insurance and supplier spend stay here. Surplus is
                retained rather than extracted to a foreign parent, and skills in AI infrastructure get
                built locally rather than imported. We won't overstate the tax argument — a co-operative
                operating at cost generates little profit by design. The honest claim is retained value and
                local employment, not a large tax cheque.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <Globe2 className="h-5 w-5 text-cyan-600" />
                <h3 className="text-lg font-bold text-slate-900">People elsewhere</h3>
              </div>
              <p className="text-slate-600 text-sm">
                If this works, the model is designed to be copied. Rules, financial model, software,
                operations manual — packaged so people in other countries can start their own co-operative,
                locally owned and locally funded. We're building a template, not a monument.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;

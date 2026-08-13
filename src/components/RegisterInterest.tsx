import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

const organisationTypes = [
  'University / research group',
  'Small business, studio or agency',
  'Individual researcher or developer',
  'Local community / resident',
  'Other',
];

const amountBands = ['£250 – £1,000', '£1,000 – £10,000', '£10,000 – £50,000', '£50,000+', 'Not sure yet'];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const RegisterInterest: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    organisationType: organisationTypes[0],
    amount: amountBands[0],
    message: '',
    'company-website': '',
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'register-interest', ...form }),
      });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <section id="register" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center bg-slate-50 border border-slate-200 rounded-2xl p-12">
            <CheckCircle2 className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Thanks — you're on the list.</h2>
            <p className="text-slate-600">We'll be in touch as the raise progresses. No obligation, no spam.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Register your interest</h2>
            <p className="text-slate-600">
              This isn't a share application — it's a way to be first in line when the raise opens
              formally. Takes under a minute.
            </p>
          </div>

          <form
            name="register-interest"
            onSubmit={handleSubmit}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-5"
          >
            <input type="hidden" name="form-name" value="register-interest" />
            <p className="hidden">
              <label>
                Don't fill this out: <input onChange={update('company-website')} name="company-website" />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Organisation (optional)</label>
              <input
                type="text"
                value={form.organisation}
                onChange={update('organisation')}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">You are a...</label>
                <select
                  value={form.organisationType}
                  onChange={update('organisationType')}
                  className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {organisationTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Likely interest</label>
                <select
                  value={form.amount}
                  onChange={update('amount')}
                  className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {amountBands.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Anything else? (optional)</label>
              <textarea
                value={form.message}
                onChange={update('message')}
                rows={3}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {status === 'submitting' ? 'Sending…' : 'Register interest'}
              {status !== 'submitting' && <Send className="h-4 w-4" />}
            </button>

            {status === 'error' && (
              <p className="text-sm text-rose-600 text-center">
                Something went wrong — please email us directly instead.
              </p>
            )}

            <p className="text-xs text-slate-400 text-center">
              Capital at risk. This is not an offer of shares. See the risk information above.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterInterest;

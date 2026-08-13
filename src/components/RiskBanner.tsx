import React from 'react';
import { AlertTriangle } from 'lucide-react';

const RiskBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-100 text-sm">
      <div className="container mx-auto px-6 py-2.5 flex flex-wrap items-center gap-2 justify-center text-center">
        <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />
        <span>
          Don’t invest unless you’re prepared to lose all the money you invest. This is a high-risk
          investment and you are unlikely to be protected if something goes wrong.{' '}
          <a href="#risk" className="underline decoration-amber-400 underline-offset-2 hover:text-amber-300">
            Take 2 minutes to learn more
          </a>
        </span>
      </div>
    </div>
  );
};

export default RiskBanner;

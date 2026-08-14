import React from 'react';
import { Cpu, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="flex items-center gap-2 text-white font-bold">
            <Cpu className="h-6 w-6 text-cyan-400" />
            Community Data Center
          </div>
          <a href="mailto:i.naim@finailabz.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
            <Mail className="h-4 w-4" />
            i.naim@finailabz.com
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 space-y-3">
          <p className="text-xs leading-relaxed">
            Community Data Center is being developed by AI Labz Ltd, which is promoting the formation of
            a Community Benefit Society. Registration of the society is the first funded milestone.
            Shares will be issued by the society, not by AI Labz Ltd.
          </p>
          {/* TODO(legal): financial-promotion status conflicts with the risk banner above — confirm
              with a solicitor experienced in community share offers (or the Community Shares Unit)
              whether withdrawable share capital in a registered society sits outside the financial
              promotion regime before resolving this wording either way. */}
          <p className="text-xs leading-relaxed">
            Capital at risk. Community shares are not covered by the Financial Services Compensation
            Scheme. This site is not a financial promotion and does not constitute an offer of shares.
          </p>
          <p className="text-xs">© {year} AI Labz Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

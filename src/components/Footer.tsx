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
          <a href="mailto:communitydatacenter@finailabz.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
            <Mail className="h-4 w-4" />
            communitydatacenter@finailabz.com
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 space-y-3">
          <p className="text-xs leading-relaxed">
            Community Data Center is a project of AI Labz Ltd, operating as a Community Benefit Society.
            Capital at risk. Community shares are not covered by the Financial Services Compensation
            Scheme. This site is not a financial promotion and does not constitute an offer of shares.
          </p>
          <p className="text-xs">
            © {year} AI Labz Ltd. All rights reserved. AI Labz Ltd is the legal owner of all intellectual
            property developed under the FinAI Labz brand, including open-source and proprietary
            technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

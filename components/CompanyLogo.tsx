import React from 'react';
import { LogoIcon } from './Icons';

export const CompanyLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <LogoIcon className="w-14 h-14" />
      <div>
        <div className="text-3xl font-bold text-[#ef782a] leading-tight tracking-wider uppercase">
          Jazee
        </div>
        <div className="text-lg text-[#282828] tracking-widest uppercase -mt-1">
          Automation
        </div>
      </div>
    </div>
  );
};

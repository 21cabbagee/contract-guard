import React from 'react';
import { ShieldCheck, Sparkles, Scale, FileText } from 'lucide-react';

export default function Header({ onOpenCab, onScrollToScanner }) {
  return (
    <header className="sticky top-0 z-40 border-b border-shield-500/20 bg-navy-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-shield-500 to-sky-600 flex items-center justify-center shadow-lg shadow-shield-500/25 border border-shield-400/30">
            <Scale className="w-5 h-5 text-navy-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                Contract<span className="text-shield-400">Guard</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-shield-500/20 text-shield-300 border border-shield-500/30 font-mono">
                Legal AI
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Automated Contract Redlining & MSA Toxic Clause Guard
            </p>
          </div>
        </div>

        {/* Navigation & CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={onScrollToScanner}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-shield-400" />
            <span>Interactive Scanner</span>
          </button>

          <button
            onClick={onOpenCab}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-shield-500 via-sky-500 to-blue-600 text-navy-950 hover:text-black shadow-md shadow-shield-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all font-sans font-bold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Founding CAB ($29/mo)</span>
          </button>
        </div>
      </div>
    </header>
  );
}

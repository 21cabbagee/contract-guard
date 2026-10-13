import React from 'react';
import { Scale, ShieldAlert, Sparkles, TrendingUp, CheckCircle2, FileCheck, AlertTriangle } from 'lucide-react';

export default function Hero({ onOpenCab, onScrollToScanner }) {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-600/15 via-blue-600/10 to-indigo-600/15 blur-[125px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-shield-500/30 text-shield-300 text-xs font-semibold mb-6 shadow-sm shadow-shield-500/10 font-mono">
            <span className="flex h-2 w-2 rounded-full bg-shield-400 animate-ping" />
            <span className="tracking-wide">AI Legal Defense Engine for Independent Operators</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Sub-Second Redlines</span>
          </div>

          {/* Exact Specification H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.15]">
            Automated Contract Redlining &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shield-400 via-sky-300 to-blue-300">
              Toxic Clause Guard
            </span>{' '}
            for Freelancers
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Never sign unlimited indemnification, Net-90 payment traps, or predatory IP assignments again. Instant contract scanner that arms freelancers with bank-grade legal counter-proposals in 30 seconds.
          </p>

          {/* Key Value Prop Matrix */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-rose-400 mb-1">
                <ShieldAlert className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">Indemnity Cap</span>
              </div>
              <p className="text-xs text-slate-400">Limits exposure strictly to 3 months of fees</p>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">Net-15 Enforcement</span>
              </div>
              <p className="text-xs text-slate-400">Replaces Net-90 & pay-when-paid with statutory interest</p>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-shield-400 mb-1">
                <FileCheck className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">Paid-in-Full IP</span>
              </div>
              <p className="text-xs text-slate-400">Guarantees IP ownership remains yours until final check</p>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">$4.17B TAM</span>
              </div>
              <p className="text-xs text-slate-400">3.5M creative & dev freelancers × $99/mo</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToScanner}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-shield-500 via-sky-500 to-blue-600 text-navy-950 hover:text-black shadow-lg shadow-shield-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Scale className="w-4 h-4" />
              <span>Launch Live Contract Redline Scanner</span>
            </button>

            <button
              onClick={onOpenCab}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold bg-navy-900/90 border border-shield-500/30 text-white hover:bg-navy-850 hover:border-shield-400/50 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-shield-400" />
              <span>Join Founding CAB ($29/mo Lifetime)</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-shield-400" />
              Zero Lawyer Retainers Required ($0 vs $1,000/hr)
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-shield-400" />
              100% Client-Side Privacy (Files Never Stored)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

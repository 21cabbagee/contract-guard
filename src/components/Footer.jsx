import React from 'react';
import { Scale, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenCab }) {
  return (
    <footer className="border-t border-shield-500/20 bg-navy-950/90 pt-12 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-shield-500/20 border border-shield-500/40 flex items-center justify-center text-shield-400">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white">
                Contract<span className="text-shield-400">Guard</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-4">
              Automated contract redlining and toxic clause guard for freelancers, consultants, and boutique agencies. Eliminate unlimited indemnification, Net-90 traps, and predatory IP assignments in 30 seconds.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Canonical URL: <span className="text-shield-300">/tools/freelancer-contract-redline-guard</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
              Core Guards
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li><span className="text-slate-300">Indemnity Liability Cap ($3-Mo Fees)</span></li>
              <li><span className="text-slate-300">IP Transfer Conditioned on Payment</span></li>
              <li><span className="text-slate-300">Net-15 Late Interest Enforcer</span></li>
              <li><span className="text-slate-300">Non-Compete Severance</span></li>
            </ul>
          </div>

          {/* SEO Matrix */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
              Target Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-default">freelancer contract redline tool</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">detect toxic indemnity clause agency</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">automated msa contract reviewer freelance</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">net 90 payment counter clause generator</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ContractGuard. All rights reserved. Zero lawyer retainers required.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCab}
              className="text-shield-400 hover:text-shield-300 font-semibold"
            >
              Freelancer Advisory Board (CAB)
            </button>
            <span>•</span>
            <span className="text-slate-600">Built for Independent Builders</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

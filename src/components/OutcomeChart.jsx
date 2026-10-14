import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, Zap, DollarSign, CheckCircle2, FileText, Scale } from 'lucide-react';

/**
 * OutcomeChart for ContractGuard (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $650/hour outside law firm billable hours ($6 legal review services) with Autonomous Contract Redlining ($1 software).
 */
export default function OutcomeChart({
  serviceName = "Vendor MSA & SLA Autonomous Legal Redlining",
  defaultMonthlyContracts = 25,
  onCtaClick
}) {
  const [contracts, setContracts] = useState(defaultMonthlyContracts);

  // Legacy legal review: Outside counsel charges ~$1,850 per enterprise MSA/SLA review with 10-day turnaround
  const legacyOutsideCounselCost = contracts * 1850;
  // ContractGuard autonomous review fee is $65 per verified contract
  const autoSoftwareCost = contracts * 65;
  const netLegalSavings = legacyOutsideCounselCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyOutsideCounselCost - autoSoftwareCost) / legacyOutsideCounselCost) * 100);

  const maxCost = Math.max(legacyOutsideCounselCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 10);

  return (
    <div className="relative rounded-2xl border border-cyan-500/30 bg-navy-900/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-navy-950 border-cyan-500/40 text-cyan-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $650/hr Law Firm Invoices ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Legal Spend Economics: <span className="text-cyan-400">{savingsPercent}% Counsel Fee Elimination</span>
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Mid-market CFOs spend six figures annually on law firms simply to redline standard vendor MSAs and indemnification clauses. We replace outside legal markup with instant deterministic playbook audits in 12 seconds.
          </p>
        </div>

        <div className="text-right bg-navy-950/80 border border-cyan-500/30 rounded-xl p-3 px-4 min-w-[190px]">
          <span className="text-[11px] text-slate-400 block font-medium">Monthly Legal Spend Slashed</span>
          <span className="text-2xl md:text-3xl font-black text-cyan-400">
            ${netLegalSavings.toLocaleString()}
          </span>
          <span className="text-[10px] text-cyan-300/80 flex items-center justify-end gap-1 font-semibold font-mono">
            <TrendingUp className="w-3 h-3" /> 12s Instant Turnaround
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-white/10">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            Monthly Inbound Vendor Contracts & SOWs:
          </label>
          <span className="text-base font-bold text-white bg-navy-950 px-3 py-1 rounded-lg border border-cyan-500/30 font-mono">
            {contracts} Contracts / mo (${(legacyOutsideCounselCost * 12).toLocaleString()}/yr Legal Risk)
          </span>
        </div>
        <input 
          type="range" 
          min={5} 
          max={100} 
          step={5}
          value={contracts}
          onChange={(e) => setContracts(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>5 Contracts (Startup)</span>
          <span>25 Contracts (Mid-Market CFO)</span>
          <span>100+ Contracts (Enterprise Procurement)</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-navy-950 rounded-xl p-5 border border-white/10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between font-mono">
            <span>Monthly Legal Cost Comparison</span>
            <span className="text-[10px] text-slate-500">Live Simulation</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Outside Law Firm Retainers ($6 Layer)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyOutsideCounselCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-rose-400 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  ContractGuard Playbook Autopilot ($1)
                </span>
                <span className="font-mono font-bold text-cyan-300">${autoSoftwareCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden border border-cyan-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 rounded-lg shadow-lg shadow-cyan-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Annual Net Corporate Budget Saved:</span>
            <span className="text-sm font-bold text-cyan-400">+${(netLegalSavings * 12).toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-navy-950/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Playbook-Grounded Clause Redlines</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Audits uncapped liability, non-standard indemnification, auto-renewal traps, and venue risk strictly against your internal risk tolerances.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-navy-950/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Zero Sales Cycle Stalls</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Never wait 14 business days for outside counsel. Sales reps and procurement leads get clean redlined Word (.docx) files back in under 30 seconds.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-navy-950/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Deterministic Security</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Zero training on your confidential contracts. SOC2 Type II compliance with isolated single-tenant cryptographic boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

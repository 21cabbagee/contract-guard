import React, { useState } from 'react';
import { Scale, ShieldAlert, Copy, Check, FileText, AlertTriangle, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { SAMPLE_CONTRACTS } from '../data/mockContractData';

export default function ContractScannerStudio() {
  const [activeContract, setActiveContract] = useState(SAMPLE_CONTRACTS[0]);
  const [copiedId, setCopiedId] = useState(null);
  const [customText, setCustomText] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleCopyClause = (clauseId, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(clauseId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleLoadSample = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setActiveContract(SAMPLE_CONTRACTS[0]);
    }, 400);
  };

  return (
    <section id="scanner-studio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-shield-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Scale className="w-3.5 h-3.5" />
            <span>Interactive Redline Sandbox & Toxic Clause Analyzer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Live Contract Defense Console
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Extracts hidden legal liabilities and outputs copy-ready counter-proposals that enterprise legal teams routinely accept.
          </p>
        </div>

        {/* Global Summary Badge */}
        <div className="flex items-center gap-3 bg-navy-900/90 border border-white/10 rounded-2xl p-3 shrink-0 font-mono text-xs">
          <div className="px-3 border-r border-white/10">
            <span className="block text-[10px] uppercase text-slate-400">Risk Assessment</span>
            <span className="text-rose-400 font-bold">4 TOXIC TRAPS</span>
          </div>
          <div className="px-3 border-r border-white/10">
            <span className="block text-[10px] uppercase text-slate-400">Liability Before</span>
            <span className="text-rose-400 font-bold">UNCAPPED ($∞)</span>
          </div>
          <div className="px-3">
            <span className="block text-[10px] uppercase text-slate-400">Protected Liability</span>
            <span className="text-emerald-400 font-bold">$11,250 MAX CAP</span>
          </div>
        </div>
      </div>

      {/* Contract Metadata Card */}
      <div className="p-4 rounded-2xl bg-navy-900/80 border border-shield-500/20 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-shield-500/20 border border-shield-500/30 flex items-center justify-center text-shield-400 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-mono text-sm">{activeContract.name}</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
                Action Required
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Client: <span className="text-slate-200">{activeContract.client}</span> • SOW Value:{' '}
              <span className="text-emerald-400 font-bold">{activeContract.contractValue}</span>
            </p>
          </div>
        </div>

        <button
          onClick={handleLoadSample}
          className="px-3.5 py-1.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5 text-shield-400" />
          <span>Reload Sample Enterprise MSA</span>
        </button>
      </div>

      {/* Flagged Toxic Clauses List */}
      <div className="space-y-6">
        {activeContract.clauses.map((clause) => {
          const isCopied = copiedId === clause.id;

          return (
            <div
              key={clause.id}
              className="rounded-2xl border border-rose-500/30 bg-gradient-to-r from-navy-900/95 via-navy-900/90 to-navy-950 p-6 shadow-xl backdrop-blur-md"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                    clause.severity === 'CRITICAL'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {clause.severity} THREAT
                  </span>
                  <span className="text-xs font-mono text-slate-400">Category: {clause.category}</span>
                </div>
                <h4 className="text-base font-bold text-white font-sans">
                  {clause.toxicTitle}
                </h4>
              </div>

              {/* Threat Impact Callout */}
              <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-200 mb-4 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-rose-300 block mb-0.5">Why This Is Dangerous:</span>
                  <span>{clause.threatAnalysis}</span>
                </div>
              </div>

              {/* Redline Comparison Box */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-mono text-xs">
                {/* Original Clause */}
                <div className="p-4 rounded-xl bg-navy-950/80 border border-rose-500/20">
                  <div className="flex items-center justify-between mb-2 text-rose-400 text-[11px] font-bold">
                    <span>ORIGINAL CLAUSE (Predatory)</span>
                    <span className="line-through">SEVER</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed italic bg-rose-950/20 p-2.5 rounded border-l-2 border-rose-500">
                    "{clause.originalText}"
                  </p>
                </div>

                {/* Recommended Counter-Proposal */}
                <div className="p-4 rounded-xl bg-navy-950/80 border border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2 text-emerald-400 text-[11px] font-bold">
                      <span>GUARDED COUNTER-PROPOSAL (Fair Standard)</span>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-slate-200 leading-relaxed bg-emerald-950/20 p-2.5 rounded border-l-2 border-emerald-400">
                      "{clause.counterProposal}"
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5 flex justify-end">
                    <button
                      onClick={() => handleCopyClause(clause.id, clause.counterProposal)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Counter-Clause'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

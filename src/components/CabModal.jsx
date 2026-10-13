import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Scale, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CabModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [trade, setTrade] = useState('Full-Stack Software Engineering');
  const [dealSize, setDealSize] = useState('$10,000 - $50,000 MSA');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl border border-shield-500/40 bg-navy-950 p-6 sm:p-8 shadow-2xl shadow-shield-500/20 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-shield-500/20 border border-shield-500/30 text-shield-300 text-xs font-mono font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-shield-400" />
                FOUNDING CAB COHORT • 10 SEATS
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
              Join Freelancer Advisory Board (CAB)
            </h3>

            {/* Verbatim Outreach Script */}
            <div className="mt-3 p-3.5 rounded-xl bg-navy-900 border border-white/10 text-xs text-slate-300 leading-relaxed font-sans italic">
              "We are assembling a 10-member Freelancer Advisory Board (CAB) for ContractGuard to eliminate predatory client contract traps. We are offering a 70% lifetime platform discount ($29/mo instead of $99/mo) and dedicated contract reviews for your first 5 client MSAs."
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 font-sans">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="jordan@consulting.dev"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-navy-900 border border-shield-500/20 text-white text-xs font-mono focus:border-shield-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-navy-900 border border-shield-500/20 text-white text-xs font-mono focus:border-shield-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Freelance Trade</label>
                  <select
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-navy-900 border border-shield-500/20 text-white text-xs font-mono focus:border-shield-400 outline-none"
                  >
                    <option value="Full-Stack Software Engineering">Full-Stack Software Dev</option>
                    <option value="AI / ML Architecture">AI / ML Architecture</option>
                    <option value="Product & Brand Design">Product & Brand Design</option>
                    <option value="Growth & Paid Acquisition">Growth & Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Average Contract / SOW Size</label>
                <select
                  value={dealSize}
                  onChange={(e) => setDealSize(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-navy-900 border border-shield-500/20 text-white text-xs font-mono focus:border-shield-400 outline-none"
                >
                  <option value="<$5,000">&lt; $5,000</option>
                  <option value="$5,000 - $20,000">$5,000 - $20,000</option>
                  <option value="$20,000 - $75,000">$20,000 - $75,000</option>
                  <option value=">$75,000">&gt; $75,000</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-shield-500 via-sky-500 to-blue-600 hover:from-shield-400 hover:to-sky-400 text-navy-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-shield-500/25 transition-all"
                >
                  <span>Claim 70% Lifetime Seat ($29/mo)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-shield-500/20 border border-shield-500/40 flex items-center justify-center mx-auto mb-4 text-shield-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-sans">Welcome to Founding CAB!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-4 font-sans">
              Your rate is locked at <span className="font-mono text-shield-400 font-bold">$29/mo lifetime</span>. Dedicated API key and onboarding instructions sent to <span className="font-mono text-white">{email}</span>.
            </p>
            <div className="p-3 rounded-xl bg-navy-900 border border-white/10 text-xs font-mono text-shield-300 mb-6">
              Assigned Seat: Founding Member #05 of 10
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all font-sans"
            >
              Back to Scanner
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

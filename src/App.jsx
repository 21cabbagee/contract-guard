import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OutcomeChart from './components/OutcomeChart';
import ContractScannerStudio from './components/ContractScannerStudio';
import CabModal from './components/CabModal';
import Footer from './components/Footer';

export default function App() {
  const [isCabOpen, setIsCabOpen] = useState(false);

  const scrollToScanner = () => {
    const el = document.getElementById('scanner-studio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-shield-500 selection:text-navy-950">
      {/* Sticky Header */}
      <Header
        onOpenCab={() => setIsCabOpen(true)}
        onScrollToScanner={scrollToScanner}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCab={() => setIsCabOpen(true)}
          onScrollToScanner={scrollToScanner}
        />

        {/* Bklit UI + Julien Bek $1 vs $6 Sequoia Framework */}
        <OutcomeChart onCtaClick={() => setIsCabOpen(true)} />

        {/* Interactive Contract Scanner Studio */}
        <ContractScannerStudio />
      </main>

      {/* Footer */}
      <Footer onOpenCab={() => setIsCabOpen(true)} />

      {/* Customer Advisory Board (CAB) Modal */}
      <CabModal
        isOpen={isCabOpen}
        onClose={() => setIsCabOpen(false)}
      />
    </div>
  );
}

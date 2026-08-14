import React from 'react';
import RiskBanner from './components/RiskBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatItBuys from './components/WhatItBuys';
import WhyWereDoingIt from './components/WhyWereDoingIt';
import WhoBenefits from './components/WhoBenefits';
import WhoDoesNotBenefit from './components/WhoDoesNotBenefit';
import MarketComparison from './components/MarketComparison';
import Milestones from './components/Milestones';
import RiskDisclosure from './components/RiskDisclosure';
import RegisterInterest from './components/RegisterInterest';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <RiskBanner />
      <Header />
      <Hero />
      <WhatItBuys />
      <WhyWereDoingIt />
      <WhoBenefits />
      <WhoDoesNotBenefit />
      <MarketComparison />
      <Milestones />
      <RiskDisclosure />
      <RegisterInterest />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;

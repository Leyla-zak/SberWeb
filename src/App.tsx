import React from 'react';
import Header from './components/main_page/Header/Header';
import Hero from './components/main_page/Hero/Hero';
import DirectionSection from "./components/main_page/DirectionSection/DirectionSection";
import BenefitsSection from "./components/main_page/BenefitsSection/BenefitsSection";
import CandidatesSection from "./components/main_page/CandidatesSection/CandidatesSection";
import SubscriptionSection from "./components/main_page/SubscriptionSection/SubscriptionSection";
import Footer from "./components/main_page/Footer/Footer";


function App() {
  return (
      <div className="App">
          <Header />
          <Hero/>
          <DirectionSection />
          <BenefitsSection />
          <CandidatesSection />
          <SubscriptionSection />
          <Footer />
      </div>
  );
}

export default App;

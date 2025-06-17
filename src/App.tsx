import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Hero from './components/main_page/Hero/Hero';
import DirectionSection from "./components/main_page/DirectionSection/DirectionSection";
import BenefitsSection from "./components/main_page/BenefitsSection/BenefitsSection";
import CandidatesSection from "./components/main_page/CandidatesSection/CandidatesSection";
import SubscriptionSection from "./components/main_page/SubscriptionSection/SubscriptionSection";
import SearchCandidates from './components/main_page/CandidatesSection/SearchCandidates';
import CandidateProfile from './components/main_page/CandidatesSection/CandidateProfile';
import ResumeSubmissionPage from './components/ResumeSubmission/ResumeSubmissionPage';
import TermsOfService from './components/Legal/TermsOfService';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import AboutPage from './components/About/AboutPage';
import PortalPage from './components/Portal/PortalPage';
// import RegistrationPage from './pages/Auth/RegistrationPage'; // Удаляем импорт, так как теперь это в модальном окне
// import LoginPage from './pages/Auth/LoginPage'; // Удаляем импорт

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <>
                            <Hero />
          <DirectionSection />
          <BenefitsSection />
          <CandidatesSection />
          <SubscriptionSection />
                        </>
                    } />
                    <Route path="candidates/search" element={<SearchCandidates />} />
                    <Route path="candidates/:id" element={<CandidateProfile />} />
                    <Route path="/resume-submission" element={<ResumeSubmissionPage />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portal" element={<PortalPage />} />
                    {/* <Route path="/register" element={<RegistrationPage />} /> */}
                    {/* <Route path="/login" element={<LoginPage />} /> */}
                </Route>
            </Routes>
        </Router>
  );
}

export default App;

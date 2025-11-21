import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { LatestArticles } from './components/LatestArticles';

// Pages
import { About } from './components/pages/About';
import { MedicalAISecurity } from './components/pages/MedicalAISecurity';
import { Standards } from './components/pages/Standards';
import { DesignControls } from './components/pages/DesignControls';
import { VerificationValidation } from './components/pages/VerificationValidation';
import { Templates } from './components/pages/Templates';
import { Articles } from './components/pages/Articles';
import { ArticleDetail } from './components/pages/ArticleDetail';

function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <LatestArticles />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mas" element={<MedicalAISecurity />} />
          <Route path="/sfs" element={<Standards />} />
          <Route path="/dc" element={<DesignControls />} />
          <Route path="/vv" element={<VerificationValidation />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

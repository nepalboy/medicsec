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
import { TrainingAwareness } from './components/pages/TrainingAwareness';
import { Templates } from './components/pages/Templates';
import { Articles } from './components/pages/Articles';
import { ArticleDetail } from './components/pages/ArticleDetail';
import { PrintArticleDetail } from './components/pages/PrintArticleDetail';
import { WorksheetA } from './components/pages/templates/WorksheetA';
import { WorksheetB } from './components/pages/templates/WorksheetB';

function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeatureGrid />
      <LatestArticles />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mas" element={<MedicalAISecurity />} />
          <Route path="/sfs" element={<Standards />} />
          <Route path="/dc" element={<DesignControls />} />
          <Route path="/vv" element={<VerificationValidation />} />
          <Route path="/training-awareness" element={<TrainingAwareness />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/worksheet-a" element={<WorksheetA />} />
          <Route path="/templates/worksheet-b" element={<WorksheetB />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/print/:id" element={<PrintArticleDetail />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

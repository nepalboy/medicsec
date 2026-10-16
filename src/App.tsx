import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { LatestArticles } from './components/LatestArticles';

// Pages
import { About } from './components/pages/About';
import { MedicalAISecurity } from './components/pages/MedicalAISecurity';
import { Safety } from './components/pages/Safety';
import { FDAData } from './components/pages/FDAData';
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
import { RiskManagementPlanTemplate } from './components/pages/templates/RiskManagementPlanTemplate';
import { ThreatModelTemplate } from './components/pages/templates/ThreatModelTemplate';
import { RiskAssessmentTemplate } from './components/pages/templates/RiskAssessmentTemplate';
import { SbomGuideTemplate } from './components/pages/templates/SbomGuideTemplate';
import { VulnerabilityAssessmentTemplate } from './components/pages/templates/VulnerabilityAssessmentTemplate';
import { UnresolvedAnomaliesTemplate } from './components/pages/templates/UnresolvedAnomaliesTemplate';
import { TraceabilityMatrixTemplate } from './components/pages/templates/TraceabilityMatrixTemplate';
import { SecurityMetricsTemplate } from './components/pages/templates/SecurityMetricsTemplate';
import { ArchitectureViewsTemplate } from './components/pages/templates/ArchitectureViewsTemplate';
import { SecurityRequirementsTemplate } from './components/pages/templates/SecurityRequirementsTemplate';
import { TestingReportTemplate } from './components/pages/templates/TestingReportTemplate';
import { LabelingTemplate } from './components/pages/templates/LabelingTemplate';
import { ManagementPlanTemplate } from './components/pages/templates/ManagementPlanTemplate';

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
          <Route path="/safety" element={<Safety />} />
          <Route path="/fda-data" element={<FDAData />} />
          <Route path="/sfs" element={<Standards />} />
          <Route path="/dc" element={<DesignControls />} />
          <Route path="/vv" element={<VerificationValidation />} />
          <Route path="/training-awareness" element={<TrainingAwareness />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/worksheet-a" element={<WorksheetA />} />
          <Route path="/templates/worksheet-b" element={<WorksheetB />} />
          <Route path="/templates/risk-management-plan" element={<RiskManagementPlanTemplate />} />
          <Route path="/templates/threat-model" element={<ThreatModelTemplate />} />
          <Route path="/templates/risk-assessment" element={<RiskAssessmentTemplate />} />
          <Route path="/templates/sbom-guide" element={<SbomGuideTemplate />} />
          <Route path="/templates/vulnerability-assessment" element={<VulnerabilityAssessmentTemplate />} />
          <Route path="/templates/unresolved-anomalies" element={<UnresolvedAnomaliesTemplate />} />
          <Route path="/templates/traceability-matrix" element={<TraceabilityMatrixTemplate />} />
          <Route path="/templates/security-metrics" element={<SecurityMetricsTemplate />} />
          <Route path="/templates/architecture-views" element={<ArchitectureViewsTemplate />} />
          <Route path="/templates/security-requirements" element={<SecurityRequirementsTemplate />} />
          <Route path="/templates/testing-report" element={<TestingReportTemplate />} />
          <Route path="/templates/labeling" element={<LabelingTemplate />} />
          <Route path="/templates/management-plan" element={<ManagementPlanTemplate />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/print/:id" element={<PrintArticleDetail />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

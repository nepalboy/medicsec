import React from 'react';
import { LayoutTemplate, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Templates: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Security Templates</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Accelerate your compliance with ready-to-use templates for medical device security documentation.
                    </p>
                </div>

                <div className="grid gap-6 max-w-4xl mx-auto">
                    {[
                        { title: "Worksheet A: Cyber Risk Assessment", link: "/templates/worksheet-a", active: true },
                        { title: "Worksheet B: Cyber Incident Response", link: "/templates/worksheet-b", active: true }
                    ].map((template, index) => (
                        <div key={index} className="flex items-center justify-between bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                            <div className="flex items-center gap-4">
                                <LayoutTemplate className="text-pink-500" />
                                <span className="font-medium text-slate-900 text-lg">{template.title}</span>
                            </div>
                            <Link to={template.link} className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                <Download size={20} /> Open Template
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">eSTAR Cybersecurity Templates</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Fill-in templates for every cybersecurity deliverable in FDA's February 2026 guidance
                        ("Cybersecurity in Medical Devices: Quality Management System Considerations and Content
                        of Premarket Submissions") — structured around the guidance sections reviewers expect.
                        See the companion article <Link to="/articles/estar-cybersecurity-510k" className="text-blue-600 hover:text-blue-700 underline">eSTAR Cybersecurity Deliverables for 510(k) Submissions</Link>.
                    </p>
                </div>

                <div className="grid gap-6 max-w-4xl mx-auto">
                    {[
                        { title: "Cybersecurity Risk Management Plan", link: "/templates/risk-management-plan" },
                        { title: "Threat Model (STRIDE)", link: "/templates/threat-model" },
                        { title: "Cybersecurity Risk Assessment", link: "/templates/risk-assessment" },
                        { title: "Software Bill of Materials (SBOM) Generation Guide", link: "/templates/sbom-guide" },
                        { title: "Vulnerability Assessment & Software Support", link: "/templates/vulnerability-assessment" },
                        { title: "Security Assessment of Unresolved Anomalies", link: "/templates/unresolved-anomalies" },
                        { title: "Cybersecurity Traceability Matrix", link: "/templates/traceability-matrix" },
                        { title: "Cybersecurity Measures & Metrics", link: "/templates/security-metrics" },
                        { title: "Security Architecture Views", link: "/templates/architecture-views" },
                        { title: "Security Requirements & Controls", link: "/templates/security-requirements" },
                        { title: "Cybersecurity Testing Report", link: "/templates/testing-report" },
                        { title: "Cybersecurity Labeling", link: "/templates/labeling" },
                        { title: "Cybersecurity Management Plan", link: "/templates/management-plan" }
                    ].map((template, index) => (
                        <div key={index} className="flex items-center justify-between bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                            <div className="flex items-center gap-4">
                                <LayoutTemplate className="text-pink-500" />
                                <span className="font-medium text-slate-900 text-lg">{template.title}</span>
                            </div>
                            <Link to={template.link} className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                <Download size={20} /> Open Template
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

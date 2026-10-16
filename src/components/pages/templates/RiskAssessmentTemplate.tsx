import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RiskAssessmentTemplate: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8 no-print">
                    <Link to="/templates" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
                        <ArrowLeft size={20} /> Back to Templates
                    </Link>
                    <button onClick={handlePrint} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <Printer size={20} /> Print Template
                    </button>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm print:shadow-none print:border-none">
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Cybersecurity Risk Assessment</h1>

                    <div className="bg-slate-50 rounded-lg p-4 mb-8 text-sm text-slate-700">
                        <p className="mb-2"><strong>About this template.</strong> This assessment captures the cybersecurity risks and controls identified from the threat model, scores each risk before and after mitigation, and justifies residual risk. It is the quantitative core of the submission's cybersecurity story and links security risks into the safety risk management file.</p>
                        <p className="mb-2"><strong>FDA reference:</strong> Sec V.A.2, V.A.3.</p>
                        <p><strong>eSTAR:</strong> Cybersecurity section attachment.</p>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">Document Control</h2>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Document ID</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Version</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Device name and model</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Reviewer</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1 Risk Scoring Method</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: FDA expects the risk scoring method to be defined up front, applied both pre-mitigation and post-mitigation, and used consistently across the risk register. Define the severity scale, likelihood scale, and how they combine into a risk level.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Severity scale</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Likelihood scale</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Risk matrix or formula</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Pre- versus post-mitigation scoring approach</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2 Risk Acceptance Criteria</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: State what constitutes acceptable risk, the thresholds for acceptability, and the escalation path for risks that exceed the criteria. Acceptance criteria must be established before assessment begins.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Acceptable risk definition</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Acceptability thresholds</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Escalation path for unacceptable risks</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3 Risk Register</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: For each threat and vulnerability pair, record the hazard, severity, likelihood before and after mitigation, the risk controls applied, and the resulting residual risk. Every entry from the threat model should appear here.</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Threat or vuln ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Hazard</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Severity</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Likelihood pre-mitigation</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Likelihood post-mitigation</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Risk controls</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Residual risk</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4 Transfer of Security Risks into Safety Risk Management</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Describe the method for transferring security risks into the safety risk assessment process per ISO 14971. Security risks with safety impact must be traceable into the safety risk management file.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">ISO 14971 linkage method</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Hazard traceability approach</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Safety risk file reference</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5 CISA Known Exploited Vulnerabilities Check</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: FDA recommends checking components against the CISA Known Exploited Vulnerabilities catalog. Vulnerabilities in the catalog should be designed out of the device where possible; document the review and any resulting actions.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">KEV catalog review date</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Findings</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Design-out actions taken</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">6 Residual Risk Justification</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Justify each residual risk that remains after controls, including why further mitigation is not practicable and why the remaining risk is acceptable in the context of the device benefits.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Residual risk justification</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Approver</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 mt-8 text-sm text-slate-600">
                        Template v1.0 — adapt section content to your device, risk profile, and QMS procedures. Verify against the current FDA guidance 'Cybersecurity in Medical Devices: Quality Management System Considerations and Content of Premarket Submissions' (Feb 2026).
                    </div>
                </div>
            </div>
        </div>
    );
};

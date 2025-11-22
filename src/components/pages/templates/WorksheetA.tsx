import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WorksheetA: React.FC = () => {
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
                        <Printer size={20} /> Print Worksheet
                    </button>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm print:shadow-none print:border-none">
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">📜 Worksheet A: Cyber Risk Assessment of Medical Device Vulnerabilities</h1>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Participant Name</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Device Name & Model</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">System Version</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1️⃣ Asset Identification & Classification</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Device Type</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Critical Functionality</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Impact Level (🔴 High / 🟡 Medium / 🟢 Low)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2️⃣ Threat & Vulnerability Identification</h2>
                            <div className="space-y-4">
                                {[
                                    "Source of Vulnerabilities (CVE, CISA, threat intel, static/dynamic scanner, SBOM)",
                                    "Software Components at Risk",
                                    "Supply Chain Risks",
                                    "Safety Risks (Patient Harm Potential)"
                                ].map((item, i) => (
                                    <div key={i}>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">✅ {item}</label>
                                        <div className="border-b border-slate-300 h-8"></div>
                                    </div>
                                ))}
                            </div>

                            <h3 className="font-bold text-slate-800 mt-6 mb-3">Processes Impacted by Vulnerabilities</h3>
                            <div className="space-y-4">
                                {[
                                    "Threat Intelligence Feed Alerts (CISA, MITRE, ISAO, FDA Notifications)",
                                    "Vulnerability Disclosure & Reporting Mechanisms",
                                    "Safety / Clinical Risk Assessment Impact",
                                    "Sources of Vulnerabilities (Firmware, Open-Source Dependencies, Third-Party Components)"
                                ].map((item, i) => (
                                    <div key={i}>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">✅ {item}</label>
                                        <div className="border-b border-slate-300 h-8"></div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3️⃣ Risk Evaluation (NIST RMF-Based)</h2>
                            <div className="space-y-4">
                                {["Likelihood of Exploitation", "Impact on Device Functionality", "Impact on Patient Safety"].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">{item}</span>
                                        <div className="flex gap-4">
                                            <span className="px-2 py-1 border rounded text-xs">🔴 High</span>
                                            <span className="px-2 py-1 border rounded text-xs">🟡 Medium</span>
                                            <span className="px-2 py-1 border rounded text-xs">🟢 Low</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4️⃣ Mitigation & Residual Risk Analysis</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Mitigation Actions</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Risk Level After Mitigation</label>
                                        <div className="flex gap-2 mt-2">
                                            <span className="px-2 py-1 border rounded text-xs">🔴 High</span>
                                            <span className="px-2 py-1 border rounded text-xs">🟡 Medium</span>
                                            <span className="px-2 py-1 border rounded text-xs">🟢 Low</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Residual Risk Level</label>
                                        <div className="flex gap-2 mt-2">
                                            <span className="px-2 py-1 border rounded text-xs">🔴 High</span>
                                            <span className="px-2 py-1 border rounded text-xs">🟡 Medium</span>
                                            <span className="px-2 py-1 border rounded text-xs">🟢 Low</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5️⃣ Response Plan & Next Steps</h2>
                            <div className="space-y-4">
                                {[
                                    "Required Patch Updates",
                                    "Compliance Documentation (FDA, NIST, ISO 14971)",
                                    "Ongoing Monitoring Measures (containment)",
                                    "Communication - Vulnerabilities Disclosure"
                                ].map((item, i) => (
                                    <div key={i}>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">{item}</label>
                                        <div className="border-b border-slate-300 h-8"></div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">6️⃣ Design Controls and Fix</h2>
                            <div className="space-y-4">
                                {[
                                    "Design input, output, verification, validation, traceability",
                                    "Software specifications",
                                    "Traceability",
                                    "Verification and validation (test cases / penetration testing)",
                                    "Update security controls (threat modeling, gap analysis, architectural diagram)"
                                ].map((item, i) => (
                                    <div key={i}>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">{item}</label>
                                        <div className="border-b border-slate-300 h-8"></div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

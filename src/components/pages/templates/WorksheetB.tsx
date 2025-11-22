import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WorksheetB: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">🚨 Worksheet B: Cyber Incident Response Exercise</h1>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Participant Name</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Incident Scenario</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1️⃣ Identification</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Source of Attack (Network, Physical Access, Software Exploit, Insider Threat)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Affected Systems</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Detection Method (SIEM Logs, IDS/IPS Alerts, User Reports)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Threat Intelligence Feeds Used (CISA, MITRE ATT&CK, ISAO, FDA Cyber Alerts)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Vulnerability Disclosure & Reporting</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2️⃣ Containment</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Immediate Action Taken</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Devices Isolated</label>
                                        <div className="flex gap-4 mt-2">
                                            <label className="flex items-center gap-2"><input type="radio" name="isolated" /> Yes</label>
                                            <label className="flex items-center gap-2"><input type="radio" name="isolated" /> No</label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Access Revoked</label>
                                        <div className="flex gap-4 mt-2">
                                            <label className="flex items-center gap-2"><input type="radio" name="revoked" /> Yes</label>
                                            <label className="flex items-center gap-2"><input type="radio" name="revoked" /> No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3️⃣ Eradication & Recovery</h2>
                            <div className="space-y-4">
                                {[
                                    "Root Cause Analysis Findings",
                                    "Malware or Exploit Used",
                                    "System Patching & Remediation",
                                    "Restoration Procedure"
                                ].map((item, i) => (
                                    <div key={i}>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">{item}</label>
                                        <div className="border-b border-slate-300 h-8"></div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4️⃣ Incident Review & Lessons Learned</h2>
                            <div className="space-y-4">
                                {[
                                    "How Could This Have Been Prevented?",
                                    "Additional Security Measures Required",
                                    "Training Improvement Recommendations"
                                ].map((item, i) => (
                                    <div key={i}>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">{item}</label>
                                        <div className="border-b border-slate-300 h-8"></div>
                                    </div>
                                ))}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Policy Updates Needed?</label>
                                    <div className="flex gap-4 mt-2">
                                        <label className="flex items-center gap-2"><input type="radio" name="policy" /> Yes</label>
                                        <label className="flex items-center gap-2"><input type="radio" name="policy" /> No</label>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

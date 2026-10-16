import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SecurityMetricsTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Cybersecurity Measures &amp; Metrics</h1>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-8 text-slate-700 text-sm space-y-2">
                        <p className="font-bold text-slate-900">About this template</p>
                        <p>Use this template to define the cybersecurity measures and metrics tracked through development and across the device lifecycle. Metrics demonstrate that security performance is measured, monitored, and improving — and feed into total product lifecycle (TPLC) security risk management.</p>
                        <p><span className="font-medium">FDA reference:</span> Sec V.A.6</p>
                        <p><span className="font-medium">eSTAR:</span> Cybersecurity section attachment</p>
                    </div>

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
                            <label className="block text-sm font-medium text-slate-700 mb-1">Device name &amp; model</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Reviewer</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1. Metrics Program Purpose</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: State why cybersecurity metrics are collected, what decisions they inform, and who owns the metrics program.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Program purpose</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Metrics program owner</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2. Metric Definitions</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Define each metric precisely — what it measures, the target or threshold, how often it is measured, and who is responsible for it.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Metric</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Definition</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Target / threshold</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Measurement frequency</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Owner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2, 3].map((i) => (
                                        <tr key={i} className="h-10">
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3. Suggested Starter Metrics</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: If you are starting a metrics program, these commonly tracked measures are a reasonable baseline. Record your target for each and adapt the set to your device and risk profile.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Suggested metric</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Your target</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        "Vulnerability remediation time (discovery to patch)",
                                        "Percentage of components with known unpatched vulnerabilities",
                                        "Penetration test findings count (per assessment)",
                                        "Patch deployment rate (patches delivered vs. planned)",
                                        "SBOM completeness (percentage of components inventoried)"
                                    ].map((m, i) => (
                                        <tr key={i} className="h-10">
                                            <td className="border border-slate-300 px-3 py-2 font-medium text-slate-700">{m}</td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4. Data Sources</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: For each metric, record where the data comes from, how it is collected, and how long it is retained.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Metric</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Data source</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Collection method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2].map((i) => (
                                        <tr key={i} className="h-10">
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Data retention period</label>
                                <div className="border-b border-slate-300 h-8"></div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5. Review Cadence &amp; Reporting</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Define how often metrics are reviewed, who receives the reports, and what triggers escalation when a target or threshold is missed.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Review frequency</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Reported to (roles / forums)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Escalation criteria when targets are missed</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-8 text-xs text-slate-600">
                        Template v1.0 — adapt section content to your device, risk profile, and QMS procedures. Verify against the current FDA guidance 'Cybersecurity in Medical Devices: Quality Management System Considerations and Content of Premarket Submissions' (Feb 2026).
                    </div>
                </div>
            </div>
        </div>
    );
};

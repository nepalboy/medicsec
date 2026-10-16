import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UnresolvedAnomaliesTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Security Assessment of Unresolved Anomalies</h1>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-8 text-slate-700 text-sm space-y-2">
                        <p className="font-bold text-slate-900">About this template</p>
                        <p>Use this template to list software anomalies present at submission and assess each one for security impact. FDA expects to see that no defect with potential cybersecurity implications was ignored: record the criteria used to address versus defer each anomaly, the rationale, compensating controls for deferred items, and the plan for future releases.</p>
                        <p><span className="font-medium">FDA reference:</span> Sec V.A.5</p>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1. Anomaly Register</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: List every known software anomaly at the time of submission, including how each was discovered and its CWE category where applicable.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Anomaly ID</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Description</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">CWE category</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Discovery method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2, 3].map((i) => (
                                        <tr key={i} className="h-10">
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2. Security Impact Assessment</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: For each anomaly, assess the potential security impact — could it be exploited, chained with other weaknesses, or affect device safety or effectiveness? Add additional blocks as needed.
                            </div>
                            <div className="space-y-6">
                                {[1, 2, 3].map((n) => (
                                    <div key={n} className="border border-slate-200 rounded-lg p-4 space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Anomaly ID</label>
                                            <div className="border-b border-slate-300 h-8"></div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Security impact assessment (exploitability, chaining potential, safety impact)</label>
                                            <div className="border-b border-slate-300 h-24"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3. Address-vs-Defer Criteria &amp; Rationale</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: State the criteria used to decide whether an anomaly is addressed before release or deferred, then record the decision and rationale for each anomaly individually.
                            </div>
                            <div className="space-y-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Criteria for addressing anomalies before release</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Criteria for deferring anomalies</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Anomaly ID</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Decision (address / defer)</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Rationale</th>
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
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4. Compensating Controls for Deferred Anomalies</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: For each deferred anomaly with security implications, describe the compensating controls in place and how the anomaly is monitored until it is resolved.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Compensating controls</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Monitoring plan for deferred anomalies</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5. Plan for Future Releases</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Record which deferred anomalies are planned for future releases, the interim mitigations in place, and the responsible owner for each.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Deferred anomaly ID</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Planned release</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Interim mitigation</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Owner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2].map((i) => (
                                        <tr key={i} className="h-10">
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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

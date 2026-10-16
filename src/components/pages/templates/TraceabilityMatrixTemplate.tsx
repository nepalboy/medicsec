import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TraceabilityMatrixTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Cybersecurity Traceability Matrix</h1>

                    <div className="bg-slate-50 rounded-lg p-4 mb-8 text-sm text-slate-700">
                        <p className="mb-2"><strong>About this template.</strong> This matrix traces the complete chain from identified threats through security requirements, design elements and controls, test cases, and verified results. It demonstrates to FDA that every threat is addressed by a requirement, every requirement is implemented, and every implementation is tested.</p>
                        <p className="mb-2"><strong>FDA reference:</strong> Sec V.A.1–V.A.6, V.B.1–V.B.2, V.C, VI.A.</p>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1 How to Use This Matrix</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Work the matrix in order: threats drive security requirements (Section 2), requirements map to design elements and controls (Section 3), controls map to test cases (Section 4), and test cases map to results and evidence (Section 5). Use consistent IDs across all tables so links can be followed in both directions.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">ID conventions used in this matrix</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2 Threat to Security Requirement</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Every threat identified in the threat model must trace to at least one security requirement. A threat with no requirement indicates an unaddressed risk.</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Threat ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Security requirement ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Requirement statement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3 Requirement to Design Element and Control</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Each security requirement must trace to the design element or control that implements it. Categorize controls (for example authentication, authorization, cryptography, integrity, confidentiality, logging, resiliency, updatability).</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Requirement ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Design element or control</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Control category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4 Control to Test Case</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Each control must trace to at least one test case that verifies it. Include security requirements testing, threat mitigation testing, and vulnerability testing (including penetration testing where applicable).</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Control ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Test case ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Test method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5 Test Case to Result and Evidence</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Record the result of each test case and reference the evidence (test report, protocol, penetration test report). Failed or deferred items must include rationale and plans for future releases.</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Test case ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Result (pass or fail)</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Evidence and report reference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">6 Gap Analysis</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Identify any items that do not link across the full chain — threats without requirements, requirements without design elements, controls without test cases, and test cases without results. Document the disposition of each gap.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Unlinked threats</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Unlinked requirements</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Unlinked controls</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Disposition and actions</label>
                                    <div className="border-b border-slate-300 h-24"></div>
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

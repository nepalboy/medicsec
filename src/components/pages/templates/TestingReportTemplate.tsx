import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TestingReportTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Cybersecurity Testing Report</h1>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-8 text-slate-700 text-sm space-y-2">
                        <p className="font-bold text-slate-900">About this template</p>
                        <p>Use this template to document cybersecurity testing performed on the device: the test plan, requirements testing with boundary analysis, threat mitigation testing, vulnerability testing across the expected techniques, and penetration testing with findings. Include who performed the testing and their independence from the development team, and attach original third-party reports where applicable.</p>
                        <p><span className="font-medium">FDA reference:</span> Sec V.C</p>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1. Test Plan Overview &amp; Tester Independence Statement</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Summarize the test plan and state who performed the testing, including their technical expertise and independence from the development team. Reference any original third-party test reports attached.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Test plan overview</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Tester independence statement (who tested, relationship to development team)</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Attached third-party reports (references)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2. Security Requirements Testing</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Provide evidence that each security design input requirement was implemented. Include boundary analysis with rationale for the boundaries tested.
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Boundary analysis &amp; rationale</label>
                                <div className="border-b border-slate-300 h-24"></div>
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Requirement ID</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Test method</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Result</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Evidence reference</th>
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

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3. Threat Mitigation Testing</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Document testing of the risk control measures identified in the threat model. Reference the threat model and show that each mitigation is effective.
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Threat model reference</label>
                                <div className="border-b border-slate-300 h-8"></div>
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Threat</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Mitigation tested</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Result</th>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4. Vulnerability Testing</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Record vulnerability testing across the techniques FDA expects: abuse and misuse cases, fuzz testing with malformed or unexpected inputs, attack surface analysis, vulnerability chaining, closed-box scanning for known vulnerabilities, software composition analysis of binary executables, static and dynamic code analysis, and scans for hard-coded, default, or easily guessed credentials.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Technique</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Performed?</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Tool / method</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Findings reference</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        "Abuse / misuse cases",
                                        "Fuzz testing (malformed / unexpected inputs)",
                                        "Attack surface analysis",
                                        "Vulnerability chaining",
                                        "Closed-box known-vulnerability scanning",
                                        "Software composition analysis of binaries",
                                        "Static code analysis",
                                        "Dynamic code analysis",
                                        "Hard-coded / default credential scan"
                                    ].map((t, i) => (
                                        <tr key={i} className="h-10">
                                            <td className="border border-slate-300 px-3 py-2 font-medium text-slate-700">{t}</td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5. Penetration Testing</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Document the penetration test scope, duration, methods, tester qualifications, and findings. Testers should be independent of the development team and technically qualified for the device's technology stack.
                            </div>
                            <div className="space-y-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Scope</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Duration</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Methods</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Tester qualifications</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Finding ID</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Severity</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Description</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Status</th>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">6. Findings, Remediation &amp; Deferred-Item Rationale</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Assess all findings, record remediation actions and timelines, and provide rationale plus future-release plans for any deferred items.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Finding</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Remediation action</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Timeline</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Deferred? (Y/N)</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Rationale for deferral</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[0, 1, 2].map((i) => (
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
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Retest evidence reference</label>
                                <div className="border-b border-slate-300 h-8"></div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">7. Tester Credentials</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: List the individuals or teams that performed each testing activity, their organization, qualifications, and independence from development.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Tester / team</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Organization</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Qualifications</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Independent of development?</th>
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

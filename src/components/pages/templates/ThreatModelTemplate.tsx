import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThreatModelTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Threat Model (STRIDE)</h1>

                    <div className="bg-slate-50 rounded-lg p-4 mb-8 text-sm text-slate-700">
                        <p className="mb-2"><strong>About this template.</strong> This threat model documents the systematic analysis of the device system for security risks affecting safety and effectiveness. It captures system decomposition, trust boundaries, enumerated threats by STRIDE category, and attack scenarios, and it feeds the cybersecurity risk assessment.</p>
                        <p className="mb-2"><strong>FDA reference:</strong> Sec V.A.1, V.B.2, App 2.</p>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1 System Description and Assumptions</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: FDA expects the threat model to state assumptions about the system and its environment of use, and to capture risks introduced through the supply chain, manufacturing, deployment, interoperation, maintenance and update, and decommissioning.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">System description</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Environment of use</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Supply chain considerations</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Manufacturing considerations</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Deployment considerations</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Maintenance and update considerations</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Decommissioning considerations</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Key assumptions</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2 System Decomposition and Data Flow</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Decompose the system into components, data flows, and external interfaces. Provide a data flow diagram identifying security-relevant elements, interfaces, security contexts, domains, and boundaries.</div>
                            <div className="space-y-4">
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-400 text-sm">
                                    Paste or sketch the data flow diagram here (components, data flows, external entities, trust boundaries).
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Components list</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">External interfaces</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Data assets</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3 Trust Boundaries</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Identify each trust boundary in the system, describe what it separates, and note which data flows cross it. Threats at boundaries deserve focused analysis.</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Boundary ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Boundary description</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Crossed by</th>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4 Threat Enumeration</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Enumerate threats against each component, data flow, and interface using STRIDE categories (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege). Each threat should trace to an affected component or interface.</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Threat ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">STRIDE category</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Description</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Affected component or interface</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5 Attack Scenarios</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Describe realistic end-to-end attack scenarios, including the attacker profile, the path through the system, and the resulting impact on device safety and effectiveness. Include multi-patient harm scenarios where applicable.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Scenario 1 (attacker, path, impact)</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Scenario 2 (attacker, path, impact)</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">6 Methodology Rationale</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Provide the rationale for the threat modeling methodology selected and why it is appropriate for this device and its risk profile.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Methodology selected</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Rationale for selection</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">7 Threat Model Maintenance</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: The threat model is a living document. Define the triggers that require an update (design changes, new vulnerabilities, new threat intelligence) and who owns it.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Review triggers</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Owner</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Review cadence</label>
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

import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RiskManagementPlanTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Cybersecurity Risk Management Plan</h1>

                    <div className="bg-slate-50 rounded-lg p-4 mb-8 text-sm text-slate-700">
                        <p className="mb-2"><strong>About this template.</strong> This plan defines how cybersecurity risks are identified, evaluated, controlled, and monitored across the device lifecycle. It establishes the security risk management process, roles, methods, and traceability strategy that underpin every other cybersecurity deliverable in the submission.</p>
                        <p className="mb-2"><strong>FDA reference:</strong> industry mapping Sec VI.B (Secure Product Development Framework processes).</p>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1 Purpose and Scope</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: FDA expects the plan to state the objective of security risk management activities and to define the device system boundary, including connected systems, software, and services. State what is in scope and explicitly what is out of scope.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Plan objective</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Scope and device system boundary</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Out-of-scope items</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2 Roles and Responsibilities</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Identify who owns security risk management activities, who performs threat modeling and testing, and who approves residual risk. Include independence of security testing from development where applicable.</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Role</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Name and title</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Responsibilities</th>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3 Security Risk Management Process</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Describe how the security risk management process aligns with the safety risk management process of ISO 14971 and the principles of AAMI TIR57. Reference the governing QMS procedures by document ID.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Alignment with ISO 14971</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Alignment with AAMI TIR57</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Governing QMS procedure references</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Lifecycle phases covered (concept through decommissioning)</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4 Threat Modeling Approach</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: State the threat modeling methodology selected (for example STRIDE), when threat modeling is performed and what triggers an update, and what artifacts it produces.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Methodology</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Timing and update triggers</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Tools used</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Outputs produced</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5 Risk Assessment Methodology</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Define the risk scoring method applied before and after mitigation, the severity and likelihood scales, and the acceptance criteria. The methodology must support evaluation of residual risk.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Risk scoring method</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Pre- and post-mitigation scoring approach</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Risk acceptance criteria</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Risk matrix or table reference</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">6 Traceability Strategy</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Explain how traceability is maintained from threats through security requirements, design elements, controls, test cases, and results. Identify the tooling and the review cadence.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Traceability artifacts and links</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Tooling</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Review cadence</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">7 Vulnerability Monitoring and Postmarket Inputs</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Describe the sources and frequency of vulnerability monitoring, the coordinated vulnerability disclosure process, and how SBOM and patch planning feed back into risk management across the total product lifecycle.</div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Monitoring sources and frequency</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Coordinated vulnerability disclosure process reference</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Patch and update process reference</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">SBOM maintenance approach</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">8 Approvals</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">Guidance: Record approval of this plan by the responsible roles defined in Section 2 before security risk management activities begin.</div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Role</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Name</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Signature</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                    <tr><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td><td className="border border-slate-300 px-3 h-10"></td></tr>
                                </tbody>
                            </table>
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

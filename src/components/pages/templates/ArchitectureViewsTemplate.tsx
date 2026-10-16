import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const views = [
    {
        title: 'Global System View',
        guidance: 'FDA expects a diagram of the complete device system showing components, data flows, and interfaces. Identify the security-relevant elements and interfaces, the trust boundaries and security domains, and how the device connects to networks, accessories, and external systems. See Appendix 2 for diagram and information detail expectations.'
    },
    {
        title: 'Multi-Patient Harm View',
        guidance: 'FDA expects analysis of scenarios where a cybersecurity compromise could harm multiple patients — for example a networked fleet, shared infrastructure, or a compromised update server. Document the propagation paths and the controls that limit the blast radius.'
    },
    {
        title: 'Updateability / Patchability View',
        guidance: 'FDA expects a view showing how software and firmware updates are delivered, verified, and installed — including the update source, authenticity verification such as signed updates, rollback capability, and the process followed when an update fails.'
    },
    {
        title: 'Security Use Case Views',
        guidance: 'FDA expects one or more views for functionality with safety risks (for example, implant programming or therapy delivery changes), showing the actors involved, the authentication and authorization steps, and the security controls protecting each use case.'
    }
];

const viewFields = [
    'Security-relevant elements and interfaces',
    'Trust boundaries and security contexts',
    'Critical user roles',
    'External interfaces'
];

export const ArchitectureViewsTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Security Architecture Views</h1>

                    <div className="bg-slate-50 rounded-lg p-4 mb-8 text-sm text-slate-700">
                        <p className="mb-2">This template captures the four security architecture views FDA recommends in premarket submissions: the global system view, the multi-patient harm view, the updateability and patchability view, and security use case views for safety-critical functionality. Use it alongside your threat model to show reviewers how security controls are arranged across the device system and its environment of use.</p>
                        <p className="mb-2"><span className="font-medium">FDA reference:</span> Sec V.B.2, App 2</p>
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
                            <label className="block text-sm font-medium text-slate-700 mb-1">Device name and model</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Reviewer</label>
                            <div className="border-b border-slate-300 h-8"></div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {views.map((view, i) => (
                            <section key={i}>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">{i + 1}. {view.title}</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                    Guidance: {view.guidance}
                                </div>
                                <div className="border-2 border-dashed border-slate-300 rounded-lg h-48 flex items-center justify-center my-4">
                                    <span className="text-slate-400 text-sm">Insert diagram here</span>
                                </div>
                                <div className="space-y-4">
                                    {viewFields.map((field, j) => (
                                        <div key={j}>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">{field}</label>
                                            <div className="border-b border-slate-300 h-8"></div>
                                        </div>
                                    ))}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Explanatory text</label>
                                        <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                    </div>
                                </div>
                            </section>
                        ))}

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5. Traceability to Security Requirements</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects traceability between the elements shown in each architecture view and the security requirements that protect them. Complete the table below so every security-relevant element maps to at least one requirement and its verification method.
                            </div>
                            <table className="w-full border border-slate-300 text-sm mb-4">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">View element</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Security requirement ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Control implemented</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Verification method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4].map((i) => (
                                        <tr key={i} className="h-10">
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Traceability notes</label>
                                <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                            </div>
                        </section>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 mt-8 text-xs text-slate-600">
                        Template v1.0 — adapt section content to your device, risk profile, and QMS procedures. Verify against the current FDA guidance 'Cybersecurity in Medical Devices: Quality Management System Considerations and Content of Premarket Submissions' (Feb 2026).
                    </div>
                </div>
            </div>
        </div>
    );
};

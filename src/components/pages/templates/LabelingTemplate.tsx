import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LabelingTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Cybersecurity Labeling</h1>

                    <div className="bg-slate-50 rounded-lg p-4 mb-8 text-sm text-slate-700">
                        <p className="mb-2">This template drafts the cybersecurity labeling content FDA recommends for devices with cybersecurity risk: the intended use environment, network interfaces, installation and update instructions, incident response, and end-of-support information. Content developed here feeds directly into the device labeling reviewed in the submission.</p>
                        <p className="mb-2"><span className="font-medium">FDA reference:</span> Sec VI.A</p>
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
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1. Intended Use Environment and Recommended Cybersecurity Controls</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects labeling to describe the intended use environment (for example, hospital network, home use) and the cybersecurity controls the user should have in place there — such as network segmentation, firewalls, or physical access restrictions.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Intended use environment</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Recommended cybersecurity controls for the environment</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Infrastructure requirements</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2. Network Ports and Interfaces</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects a list of all network ports and interfaces, what each one does, the direction of data flow, and which endpoints are approved. Users need this to configure their networks safely.
                            </div>
                            <table className="w-full border border-slate-300 text-sm mb-4">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Port / interface</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Functionality</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Direction</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Approved endpoints</th>
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
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3. Secure Installation, Configuration and Deployment Instructions</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects step-by-step instructions for secure installation and configuration, including how to change default credentials, apply secure settings, and verify the device is deployed safely before clinical use.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Installation and deployment steps</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Default credentials and how to change them</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Secure configuration checklist</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4. User-Facing SBOM Reference</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects the labeling to tell users where to find the software bill of materials in machine-readable form and how it is kept current, so customers can assess their own risk from third-party components.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Where the user-facing SBOM is published and its format</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">How the SBOM is kept current</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5. Software Update and Patch Instructions</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects instructions explaining how users obtain, verify, and install software and firmware updates — including how authenticity is confirmed before installation and what to do if an update fails.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">How users obtain updates</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Update verification and installation steps</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">What to do if an update fails</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">6. Vulnerability and Incident Response Instructions</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects labeling to tell users what to do if they suspect a cybersecurity vulnerability or incident — whom to contact, what information to provide, and what immediate steps protect patients in the meantime.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">How to report a suspected vulnerability or incident</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Immediate protective steps for users</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">7. Backup, Restore and Recovery</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects instructions for backing up device data and configuration, restoring after a failure or incident, and recovering critical functionality — including configuration retention and forensic evidence capture where applicable.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Backup procedure</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Restore and recovery procedure</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">8. End-of-Support and End-of-Life Statement</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects labeling to state how long the device will be supported, what happens at end of support, and how to securely decommission the device — including data sanitization — at end of life.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">End-of-support date and support policy</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">End-of-life and secure decommissioning instructions</label>
                                    <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                </div>
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

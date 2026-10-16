import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: 'Authentication',
        guidance: 'FDA expects controls that verify the identity of users, processes, and devices before granting access — for example, unique credentials, multi-factor authentication where appropriate, and no hard-coded or default credentials.'
    },
    {
        title: 'Authorization',
        guidance: 'FDA expects least-privilege access control: each role can perform only its permitted actions, with authorization enforced at every trust boundary.'
    },
    {
        title: 'Cryptography',
        guidance: 'FDA expects use of current, standard cryptographic algorithms for data at rest and in transit, with secure key management and no proprietary or broken ciphers.'
    },
    {
        title: 'Code, Data and Execution Integrity',
        guidance: 'FDA expects measures such as signed software and firmware, secure boot, and integrity checks that detect unauthorized modification of code and data.'
    },
    {
        title: 'Confidentiality',
        guidance: 'FDA expects protection of sensitive data — patient data, credentials, keys — from unauthorized disclosure, both in storage and in transmission.'
    },
    {
        title: 'Event Detection and Logging',
        guidance: 'FDA expects security event logging sufficient to detect and investigate incidents, with protection of log integrity and defined retention.'
    },
    {
        title: 'Resiliency and Recovery',
        guidance: 'FDA expects the device to maintain essential functions under attack or failure and to recover to a secure state, including backup and restore capabilities.'
    },
    {
        title: 'Updatability and Patchability',
        guidance: 'FDA expects a secure, timely update mechanism — authenticated update delivery, verification before installation, and defined patch timelines.'
    }
];

export const SecurityRequirementsTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Security Requirements and Controls</h1>

                    <div className="bg-slate-50 rounded-lg p-4 mb-8 text-sm text-slate-700">
                        <p className="mb-2">This template documents security requirements as design inputs with acceptance criteria, organized by FDA's control categories. It provides traceability from each requirement to its verification, supporting the cybersecurity testing and risk management documentation in your submission.</p>
                        <p className="mb-2"><span className="font-medium">FDA reference:</span> Sec V.B.1, App 1</p>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1. How to Use</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects security requirements to be treated as design inputs with defined acceptance criteria, consistent with your QMS design controls. State each requirement unambiguously, define how you will verify it, and record the rationale or source so reviewers can follow the logic.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Design input source documents</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Requirement ID scheme used</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Acceptance criteria approach</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2. Requirements Register</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: List every security requirement below. Each row should be verifiable: a reviewer must be able to confirm the requirement was implemented by checking the acceptance criteria against test evidence.
                            </div>
                            <table className="w-full border border-slate-300 text-sm mb-4">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Req ID</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Control category</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Requirement statement</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Acceptance criteria</th>
                                        <th className="border border-slate-300 px-3 py-2 text-left font-medium text-slate-700">Source / rationale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4].map((i) => (
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

                        {categories.map((cat, i) => (
                            <section key={i}>
                                <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">{i + 3}. {cat.title}</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                    Guidance: {cat.guidance}
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Controls implemented for this device</label>
                                        <textarea className="w-full border border-slate-300 rounded p-2 h-24"></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Related requirement IDs</label>
                                        <div className="border-b border-slate-300 h-8"></div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Verification method and evidence</label>
                                        <div className="border-b border-slate-300 h-8"></div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 mt-8 text-xs text-slate-600">
                        Template v1.0 — adapt section content to your device, risk profile, and QMS procedures. Verify against the current FDA guidance 'Cybersecurity in Medical Devices: Quality Management System Considerations and Content of Premarket Submissions' (Feb 2026).
                    </div>
                </div>
            </div>
        </div>
    );
};

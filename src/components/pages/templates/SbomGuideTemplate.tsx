import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SbomGuideTemplate: React.FC = () => {
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
                    <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Software Bill of Materials (SBOM) Generation Guide</h1>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-8 text-slate-700 text-sm space-y-2">
                        <p className="font-bold text-slate-900">About this template</p>
                        <p>Use this template to document how your Software Bill of Materials is generated, what it contains, and how it is maintained across the device lifecycle. A complete, machine-readable SBOM covering all software components — including commercial, open-source, and off-the-shelf components — is a statutory requirement for cyber devices and a core eSTAR cybersecurity attachment.</p>
                        <p><span className="font-medium">FDA reference:</span> Sec V.A.4, VI.A; FD&amp;C Act 524B(b)(3) (statutory)</p>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">1. SBOM Format Requirements</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA expects the SBOM to be machine-readable (JSON), generated in a standard format such as SPDX or CycloneDX, and to cover every software component in the device, including third-party, open-source, and off-the-shelf software.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">SBOM format (SPDX / CycloneDX)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Format version</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">SBOM generation tool</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">SBOM file location / attachment reference</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">2. NTIA Baseline Attributes</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Confirm each NTIA minimum baseline attribute is present in the SBOM. Record any attribute that cannot be provided and justify the gap.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Baseline attribute</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Included?</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Notes / justification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {["Supplier name", "Component name", "Version of the component", "Other unique identifiers", "Dependency relationship", "Author of SBOM data", "Timestamp"].map((attr, i) => (
                                        <tr key={i} className="h-10">
                                            <td className="border border-slate-300 px-3 py-2 font-medium text-slate-700">{attr}</td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                            <td className="border border-slate-300 px-3 py-2"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">3. Component Inventory</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: List every software component in the device. FDA expects full coverage — proprietary code, commercial libraries, open-source dependencies, firmware, and operating system components.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Component</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Supplier</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Version</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">License</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Support status</th>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">4. Support Status &amp; End-of-Support Dates</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: For each component, document the level of support (actively maintained, no longer maintained, or abandoned) and the end-of-support date, either in the SBOM or an addendum. Include plans for updating or replacing components whose support ends.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Component</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Support status</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">End-of-support date</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Replacement / update plan</th>
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
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Justification where support information cannot be provided</label>
                                <div className="border-b border-slate-300 h-24"></div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">5. Known Vulnerabilities per Component</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Identify all known vulnerabilities for each component, including any listed in CISA's Known Exploited Vulnerabilities catalog. For each, document how it was discovered, the safety and security risk assessment, and the applicable risk controls or compensating controls.
                            </div>
                            <table className="w-full border border-slate-300 text-sm">
                                <thead>
                                    <tr>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Component</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">CVE / CWE</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">In CISA KEV?</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Discovery method</th>
                                        <th className="bg-slate-50 border border-slate-300 px-3 py-2 text-left font-medium">Risk controls</th>
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
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">6. SBOM Maintenance &amp; Update Plan</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: Describe the process for keeping the SBOM current across the device lifecycle — what triggers an update, who owns it, and how often it is reviewed.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">SBOM update triggers (e.g., new release, component change, vulnerability disclosure)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Responsible owner</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Review frequency</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Maintenance process description</label>
                                    <div className="border-b border-slate-300 h-24"></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-4 bg-slate-50 p-2 rounded">7. User-Facing SBOM (Labeling)</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 my-4 text-slate-700 text-sm italic">
                                Guidance: FDA recommends providing a machine-readable SBOM to users through labeling, kept current over the device's supported life, so customers can manage vulnerabilities in their own environments.
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Location of user-facing SBOM (labeling reference)</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">How users access SBOM updates</label>
                                    <div className="border-b border-slate-300 h-8"></div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">How users are notified of SBOM changes</label>
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

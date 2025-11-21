import React from 'react';
import { FileText, Globe, BookOpen } from 'lucide-react';

export const Standards: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Standards & Frameworks</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Navigating the complex landscape of medical device cybersecurity regulations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                        <Globe className="h-10 w-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">FDA Guidance</h3>
                        <p className="text-slate-600">
                            Understanding the FDA's pre-market and post-market cybersecurity guidance documents is essential for US market entry.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                        <FileText className="h-10 w-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">EU MDR / IVDR</h3>
                        <p className="text-slate-600">
                            Compliance with the General Safety and Performance Requirements (GSPR) regarding security for the European market.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                        <BookOpen className="h-10 w-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">AAMI TIR57</h3>
                        <p className="text-slate-600">
                            Principles for medical device security - Risk management. Integrating security risk management into the ISO 14971 process.
                        </p>
                    </div>
                </div>

                <div className="prose prose-slate max-w-none">
                    <h3>Key Standards</h3>
                    <ul>
                        <li><strong>IEC 62443</strong>: Industrial communication networks - Network and system security.</li>
                        <li><strong>UL 2900</strong>: Standard for Software Cybersecurity for Network-Connectable Products.</li>
                        <li><strong>ISO/IEC 27001</strong>: Information security management systems.</li>
                        <li><strong>NIST Cybersecurity Framework</strong>: Identify, Protect, Detect, Respond, Recover.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

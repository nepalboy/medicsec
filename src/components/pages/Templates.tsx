import React from 'react';
import { LayoutTemplate, Download } from 'lucide-react';

export const Templates: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Security Templates</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Accelerate your compliance with ready-to-use templates for medical device security documentation.
                    </p>
                </div>

                <div className="grid gap-6 max-w-4xl mx-auto">
                    {[
                        "Cybersecurity Risk Management Plan",
                        "Threat Modeling Template (STRIDE)",
                        "Software Bill of Materials (SBOM) Generation Guide",
                        "Post-Market Surveillance Plan",
                        "Vulnerability Disclosure Policy"
                    ].map((template, index) => (
                        <div key={index} className="flex items-center justify-between bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                            <div className="flex items-center gap-4">
                                <LayoutTemplate className="text-pink-500" />
                                <span className="font-medium text-slate-900 text-lg">{template}</span>
                            </div>
                            <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                <Download size={20} /> Download
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

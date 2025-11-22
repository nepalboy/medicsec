import React from 'react';
import { LayoutTemplate, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                        { title: "Worksheet A: Cyber Risk Assessment", link: "/templates/worksheet-a", active: true },
                        { title: "Worksheet B: Cyber Incident Response", link: "/templates/worksheet-b", active: true },
                        { title: "Cybersecurity Risk Management Plan", link: "#", active: false },
                        { title: "Threat Modeling Template (STRIDE)", link: "#", active: false },
                        { title: "Software Bill of Materials (SBOM) Generation Guide", link: "#", active: false },
                        { title: "Post-Market Surveillance Plan", link: "#", active: false },
                        { title: "Vulnerability Disclosure Policy", link: "#", active: false }
                    ].map((template, index) => (
                        <div key={index} className="flex items-center justify-between bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                            <div className="flex items-center gap-4">
                                <LayoutTemplate className="text-pink-500" />
                                <span className="font-medium text-slate-900 text-lg">{template.title}</span>
                            </div>
                            {template.active ? (
                                <Link to={template.link} className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                                    <Download size={20} /> Open Template
                                </Link>
                            ) : (
                                <span className="flex items-center gap-2 text-slate-400 font-medium cursor-not-allowed">
                                    <Download size={20} /> Work in Progress
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

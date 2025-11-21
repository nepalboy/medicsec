import React from 'react';
import { PenTool, Layers, ClipboardCheck } from 'lucide-react';

export const DesignControls: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Design Controls</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Integrating cybersecurity into the medical device design and development process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Secure by Design</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Design controls are not just about documentation; they are about ensuring that safety and security are built into the device from the very beginning.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Effective design controls for cybersecurity involve defining security requirements, performing threat modeling during the design phase, and verifying that these controls are effective.
                        </p>
                    </div>
                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                        <h3 className="text-lg font-semibold text-green-900 mb-4">Key Activities</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <PenTool className="text-green-600 shrink-0 mt-1" />
                                <div>
                                    <span className="font-medium text-slate-900">Security Requirements</span>
                                    <p className="text-sm text-slate-600">Defining clear, testable security requirements derived from risk analysis.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Layers className="text-green-600 shrink-0 mt-1" />
                                <div>
                                    <span className="font-medium text-slate-900">Architecture Design</span>
                                    <p className="text-sm text-slate-600">Implementing defense-in-depth strategies and secure architecture patterns.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <ClipboardCheck className="text-green-600 shrink-0 mt-1" />
                                <div>
                                    <span className="font-medium text-slate-900">Design Review</span>
                                    <p className="text-sm text-slate-600">Regular reviews to ensure security considerations are addressed at each stage.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { Brain, Shield, Lock, AlertTriangle } from 'lucide-react';

export const MedicalAISecurity: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Medical AI Security</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Securing the intersection of Artificial Intelligence and Medical Devices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Brain className="text-purple-500" /> AI/ML in Healthcare
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Artificial Intelligence and Machine Learning are revolutionizing healthcare, from diagnostic imaging to personalized treatment plans. However, these technologies introduce new attack surfaces and security challenges that traditional medical device security frameworks may not fully address.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Ensuring the integrity of training data, the robustness of models against adversarial attacks, and the privacy of patient data used in these systems is paramount.
                        </p>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                        <h3 className="text-lg font-semibold text-purple-900 mb-4">Key Security Risks</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <AlertTriangle className="text-purple-500 shrink-0 mt-1" size={20} />
                                <span className="text-slate-700">Adversarial Machine Learning attacks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Lock className="text-purple-500 shrink-0 mt-1" size={20} />
                                <span className="text-slate-700">Model Inversion and Data Extraction</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Shield className="text-purple-500 shrink-0 mt-1" size={20} />
                                <span className="text-slate-700">Data Poisoning during training</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="prose prose-slate max-w-none">
                    <h3>Regulatory Landscape</h3>
                    <p>
                        Regulators like the FDA and EU bodies are increasingly focusing on AI/ML-based Software as a Medical Device (SaMD). The FDA's "Action Plan for AI/ML-Based Software as a Medical Device" highlights the need for a total product lifecycle approach to regulation, emphasizing post-market performance monitoring and robust cybersecurity controls.
                    </p>
                </div>
            </div>
        </div>
    );
};

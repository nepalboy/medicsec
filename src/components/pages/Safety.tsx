import React from 'react';
import { HeartPulse, AlertTriangle, Link2 } from 'lucide-react';
import { RelatedArticles } from '../RelatedArticles';

export const Safety: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Safety</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Patient safety is the north star of medical device engineering — and security failures are increasingly safety failures.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                        <HeartPulse className="h-10 w-10 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Hazard Analysis</h3>
                        <p className="text-slate-600">
                            ISO 14971 risk management: identifying hazards, estimating probability and severity, and driving risk down to acceptable levels through design.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                        <Link2 className="h-10 w-10 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Safety–Security Linkage</h3>
                        <p className="text-slate-600">
                            Cybersecurity and safety risk live in different mathematical worlds. Link them with judgment — trace exploits to harms without fusing the two risk processes.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                        <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">AI Safety Assurance</h3>
                        <p className="text-slate-600">
                            ML models introduce a third failure category beyond systematic and random faults: emergent misbehavior. Hazard analysis must extend to model behavior, data, and change.
                        </p>
                    </div>
                </div>

                <RelatedArticles articles={[
                    { title: 'AI Safety Challenges for Medical Devices', date: '15 Oct 2026', link: '/articles/ai-safety-challenges' },
                    { title: 'Transposing Cybersecurity-to-Safety Risks in Medical Devices', date: '24 Apr 2026', link: '/articles/cyber-safety-dilemma' },
                ]} />
            </div>
        </div>
    );
};

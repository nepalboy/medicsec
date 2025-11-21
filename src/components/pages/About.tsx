import React from 'react';
import { User, Shield, Award } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="w-full md:w-1/3">
                        <div className="aspect-square bg-slate-200 rounded-2xl flex items-center justify-center">
                            <User size={120} className="text-slate-400" />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl font-bold text-slate-900 mb-6">About Me</h1>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            I am a dedicated professional in the field of Medical Device Cybersecurity, passionate about bridging the gap between clinical safety and digital security. With extensive experience in regulatory compliance, risk management, and secure software development, I help organizations build safer, more secure medical technologies.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-blue-600 font-medium">
                                <Shield size={20} />
                                <span>Cybersecurity Expert</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-600 font-medium">
                                <Award size={20} />
                                <span>Regulatory Specialist</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prose prose-slate max-w-none">
                    <h3>My Mission</h3>
                    <p>
                        To ensure that every connected medical device is designed, developed, and maintained with security as a core safety requirement, protecting patient lives and data privacy.
                    </p>
                </div>
            </div>
        </div>
    );
};

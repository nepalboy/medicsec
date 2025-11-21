import React from 'react';
import { CheckCircle, Search, Bug } from 'lucide-react';

export const VerificationValidation: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Verification & Validation</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Testing strategies to ensure security controls are effective and meet user needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
                        <CheckCircle className="h-10 w-10 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Security Verification</h3>
                        <p className="text-slate-600">
                            Confirming that the device meets the specified security requirements through static analysis, unit testing, and integration testing.
                        </p>
                    </div>
                    <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
                        <Bug className="h-10 w-10 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Penetration Testing</h3>
                        <p className="text-slate-600">
                            Simulating real-world attacks to identify vulnerabilities that may have been missed during development.
                        </p>
                    </div>
                    <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
                        <Search className="h-10 w-10 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Vulnerability Scanning</h3>
                        <p className="text-slate-600">
                            Automated scanning of software components and dependencies for known vulnerabilities (CVEs).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

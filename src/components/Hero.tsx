import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
    return (
        <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,#2563eb_12%,transparent_12.5%,transparent_87%,#2563eb_87.5%,#2563eb),linear-gradient(150deg,#2563eb_12%,transparent_12.5%,transparent_87%,#2563eb_87.5%,#2563eb),linear-gradient(30deg,#2563eb_12%,transparent_12.5%,transparent_87%,#2563eb_87.5%,#2563eb),linear-gradient(150deg,#2563eb_12%,transparent_12.5%,transparent_87%,#2563eb_87.5%,#2563eb),linear-gradient(60deg,#2563eb77_25%,transparent_25.5%,transparent_75%,#2563eb77_75%,#2563eb77),linear-gradient(60deg,#2563eb77_25%,transparent_25.5%,transparent_75%,#2563eb77_75%,#2563eb77)] bg-[length:80px_140px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                        <Shield size={16} className="text-blue-400" />
                        <span className="text-sm font-medium text-blue-200">Medical Device Cybersecurity</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Securing the Future of <span className="text-blue-500">Connected Health</span>
                    </h1>

                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Expert guidance on medical device security, regulatory compliance (FDA, MDR), and risk management for the next generation of healthcare technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/articles" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25">
                            Latest Insights <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all border border-slate-700">
                            About Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

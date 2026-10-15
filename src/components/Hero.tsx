import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
    return (
        <div className="relative flex items-center overflow-hidden bg-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.webp"
                    alt="Connected medical device"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-slate-900">
                        Building Secure and <br />
                        <span className="text-blue-600">Safe Medical Devices</span>
                    </h1>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Welcome to my hub to innovate and build — the path to safe, secure, and compliant medical devices.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/articles" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl text-base font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25">
                            Latest Insights <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 px-6 py-3.5 rounded-xl text-base font-bold hover:bg-slate-50 transition-all border border-slate-200">
                            About Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

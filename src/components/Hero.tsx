import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
    return (
        <div className="relative flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600"
                    alt="Medical Device Security"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                        <Shield size={20} className="text-blue-400" />
                        <span className="text-base font-medium text-blue-100">Medical Device Cybersecurity</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
                        Building Secure and <br />
                        <span className="text-blue-400">Safe Medical Devices</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl">
                        Welcome to my hub for medical device cybersecurity! If you're seeking insights into best practices, FDA guidance, and the intricate details of cybersecurity deliverables for medical device development, you've come to the right place.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link to="/articles" className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25">
                            Latest Insights <ArrowRight size={24} />
                        </Link>
                        <Link to="/about" className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-5 rounded-xl text-lg font-bold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm">
                            About Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

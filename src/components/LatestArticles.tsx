import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LatestArticles: React.FC = () => {
    return (
        <section id="articles" className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Insights</h2>
                        <p className="text-slate-600">Recent articles and updates from the blog.</p>
                    </div>
                    <Link to="/articles" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        View all articles <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Featured Article */}
                    <Link to="/articles/evolving-risk" className="group cursor-pointer block">
                        <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-video">
                            {/* Placeholder for article image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider">
                                Featured
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                            <span className="flex items-center gap-1"><Calendar size={14} /> 02 Nov 2025</span>
                            <span className="flex items-center gap-1"><User size={14} /> Ravi Dhungel</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                            Evolving Risk Paradigms: Why Medical Device Security Demands a New Approach
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            The convergence of digital technologies and clinical functionality in modern medical devices has necessitated a paradigm shift in how risk is assessed and managed. Historically, safety and security risk assessments have operated in parallel but separate domains...
                        </p>
                        <span className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                            Read Article <ArrowRight size={16} />
                        </span>
                    </Link>

                    {/* Secondary List */}
                    <div className="space-y-8">
                        <Link to="/articles/print-articles" className="group cursor-pointer block border-b border-slate-100 pb-8 last:border-0">
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                                <span className="flex items-center gap-1"><Calendar size={14} /> 02 Feb 2025</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                Print Articles Collection
                            </h3>
                            <p className="text-slate-600 text-sm mb-3">
                                A collection of printed articles and publications regarding medical device security standards.
                            </p>
                            <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium">
                                Read More <ArrowRight size={14} />
                            </span>
                        </Link>

                        {/* Placeholder for more articles */}
                        <Link to="/articles/post-market-surveillance" className="group cursor-pointer block border-b border-slate-100 pb-8 last:border-0">
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                                <span className="flex items-center gap-1"><Calendar size={14} /> 15 Jan 2025</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                Understanding Post-Market Surveillance
                            </h3>
                            <p className="text-slate-600 text-sm mb-3">
                                Key strategies for maintaining security posture after device deployment.
                            </p>
                            <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium">
                                Read More <ArrowRight size={14} />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/articles" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        View all articles <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

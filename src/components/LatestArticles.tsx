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
                        <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-[16/9] shadow-md">
                            {/* Placeholder for article image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-blue-700 uppercase tracking-wider shadow-sm">
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
                        {[
                            {
                                title: "Cyber Medical Device",
                                date: "15 Oct 2024",
                                link: "/articles/print/cybermedicaldevice-1",
                                excerpt: "Insights into the cybersecurity challenges facing modern medical devices."
                            },
                            {
                                title: "Saluki",
                                date: "10 Sep 2024",
                                link: "/articles/print/saluki",
                                excerpt: "Exploring the intersection of technology and healthcare security."
                            },
                            {
                                title: "Academic Tourism",
                                date: "22 Aug 2024",
                                link: "/articles/print/academic-tourism",
                                excerpt: "A perspective on academic tourism in the context of global healthcare."
                            },
                            {
                                title: "Remote Healthcare",
                                date: "05 Jul 2024",
                                link: "/articles/print/remote",
                                excerpt: "Security considerations for remote patient monitoring and telehealth."
                            }
                        ].map((article, index) => (
                            <Link key={index} to={article.link} className="group cursor-pointer block border-b border-slate-100 pb-8 last:border-0">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-3">
                                    {article.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium">
                                    Read Article <ArrowRight size={14} />
                                </span>
                            </Link>
                        ))}
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

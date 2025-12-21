import React from 'react';
import { GraduationCap, Users, BookOpen, Award, FileDown } from 'lucide-react';

export const TrainingAwareness: React.FC = () => {
    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Training and Awareness</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Building a culture of security through education and awareness programs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <GraduationCap className="text-teal-500" /> Security Education
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Effective medical device security requires a well-trained workforce that understands both cybersecurity principles and the unique challenges of the healthcare environment. Training programs must address technical skills, regulatory requirements, and the critical importance of patient safety.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            From developers and engineers to clinical staff and executives, each stakeholder plays a vital role in maintaining a robust security posture throughout the device lifecycle.
                        </p>
                    </div>
                    <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
                        <h3 className="text-lg font-semibold text-teal-900 mb-4">Key Training Areas</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <BookOpen className="text-teal-500 shrink-0 mt-1" size={20} />
                                <span className="text-slate-700">Secure Development Lifecycle (SDL)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Users className="text-teal-500 shrink-0 mt-1" size={20} />
                                <span className="text-slate-700">Threat Modeling and Risk Assessment</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Award className="text-teal-500 shrink-0 mt-1" size={20} />
                                <span className="text-slate-700">Regulatory Compliance and Standards</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="prose prose-slate max-w-none mb-10">
                    <h3>Building a Security-Aware Culture</h3>
                    <p>
                        Security awareness goes beyond formal training programs. It requires creating an organizational culture where security is everyone's responsibility. This includes regular security updates, incident response drills, and fostering open communication about potential vulnerabilities and threats.
                    </p>
                    <p>
                        Organizations should implement continuous learning programs that keep pace with evolving threats, emerging technologies, and changing regulatory landscapes. This ensures that teams remain equipped to address new challenges in medical device security.
                    </p>
                </div>

                {/* Engagement Section */}
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Engagement</h2>
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-teal-50 border-b border-teal-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-teal-900">Topic</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-teal-900">Date</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-teal-900">Org/Conference</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-slate-800 font-medium">Medical Cybersecurity</span>
                                                <a
                                                    href="/contents/Medical Device Cybersecurity.pdf"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 p-1.5 rounded-full"
                                                    title="View presentation"
                                                >
                                                    <FileDown size={16} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-medium whitespace-nowrap">Dec 21, 2025</td>
                                        <td className="px-6 py-4 text-slate-600">
                                            <a
                                                href="https://doai.ku.edu.np/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium flex items-center gap-1 group"
                                            >
                                                Department of AI, Kathmandu University
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-slate-800 font-medium">Building Resilient Vulnerability Management Program</span>
                                                <a
                                                    href="/contents/Conference-TTL-2025-March26.pptx"
                                                    download
                                                    className="text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 p-1.5 rounded-full"
                                                    title="Download presentation"
                                                >
                                                    <FileDown size={16} />
                                                </a>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-medium whitespace-nowrap">Mar 27, 2025</td>
                                        <td className="px-6 py-4 text-slate-600">
                                            <a
                                                href="https://ttlifesciences.com/conferences/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium flex items-center gap-1 group"
                                            >
                                                US Annual Medical Device and Diagnostic Cybersecurity Conference (TTL)
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

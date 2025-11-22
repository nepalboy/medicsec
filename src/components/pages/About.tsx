import React from 'react';
import { User, Shield, Award, Briefcase, BookOpen, Globe, Mail, Linkedin, GraduationCap, MapPin, Calendar } from 'lucide-react';

const ExperienceItem: React.FC<{
    title: string;
    company: string;
    period: string;
    location?: string;
    description?: string;
    isLast?: boolean;
}> = ({ title, company, period, location, description, isLast }) => (
    <div className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline Line */}
        {!isLast && (
            <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-slate-200"></div>
        )}
        {/* Timeline Dot */}
        <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-white bg-blue-600 shadow-sm"></div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-blue-600 font-medium mt-1 mb-3">
                <span className="flex items-center gap-1"><Briefcase size={14} /> {company}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {period}</span>
                {location && <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>}
            </div>
            {description && (
                <p className="text-slate-600 text-sm leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    </div>
);

export const About: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-blue-950 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-48 h-48 flex-shrink-0 relative">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                <img
                                    src="/images/profile.jpg"
                                    alt="Ravi Dhungel"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200?text=RD';
                                    }}
                                />
                            </div>
                            <div className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full border-4 border-blue-950">
                                <Shield size={20} className="text-white" />
                            </div>
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <h1 className="text-4xl md:text-5xl font-bold mb-3">Ravi Dhungel</h1>
                            <p className="text-xl text-blue-200 font-medium mb-6">Medical Device Cybersecurity Engineer | Author | Mentor</p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a href="mailto:ravi.dhungel@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors text-sm backdrop-blur-sm">
                                    <Mail size={16} /> ravi.dhungel@gmail.com
                                </a>
                                <a href="https://www.linkedin.com/in/ravidhungel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#006396] px-4 py-2 rounded-full transition-colors text-sm shadow-lg">
                                    <Linkedin size={16} /> LinkedIn
                                </a>
                                <a href="http://www.nepalilad.blogspot.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full transition-colors text-sm shadow-lg">
                                    <Globe size={16} /> Blog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Experience */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-lg"><User size={24} className="text-blue-600" /></div>
                                About Me
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Expertise on technology management, medical cyber security, and site reliability engineering. Solid foundation on the principles of security, distributed systems, and software engineering supporting large scale distributed systems in telecom, software, biomedical, university, healthcare, and the military.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg"><Briefcase size={24} className="text-blue-600" /></div>
                            Professional Experience
                        </h2>

                        <div className="ml-2">
                            <ExperienceItem
                                title="Lead/Staff Medical Device CyberSecurity Engineer"
                                company="BD"
                                period="2022 - Present"
                                location="San Diego, CA"
                                description="Spearhead initiatives to enhance Trust, Cyber Risk Management, and Safety across Infusion Platforms. Lead cybersecurity projects aligned with business objectives, collaborating with R&D, Regulatory, and Operations."
                            />
                            <ExperienceItem
                                title="Managing Editor (Medical Cybersecurity)"
                                company="medicsec.com"
                                period="2024 - Present"
                                location="San Diego, CA"
                                description="Develop comprehensive cyber security portal for medical device cyber security practitioners."
                            />
                            <ExperienceItem
                                title="Freelance Writer"
                                company="Various Publications"
                                period="2000 - Present"
                                location="Global"
                                description="Freelance contributor on National security, border management, Cybersecurity, immigration. Articles published on The Rising Nepal, The Kathmandu Post, The Himalayan Times."
                            />
                            <ExperienceItem
                                title="Principal Cyber Security Engineer"
                                company="UC San Diego Health"
                                period="2019 - 2022"
                                location="San Diego, CA"
                                description="Enabling digital health focusing on privacy and data security by design. Strategy, governance and data framework for digital health transformation."
                            />
                            <ExperienceItem
                                title="Cyber Security Architect"
                                company="Perspecta"
                                period="Jun 2019 - Oct 2019"
                                location="Greater San Diego Area"
                            />
                            <ExperienceItem
                                title="Senior Cybersecurity Engineer"
                                company="ServiceNow"
                                period="2018 - 2019"
                                location="Greater San Diego Area"
                                description="Lead Proof-Of-Concepts (POC) and security projects with cross functional teams. Cloud Security-Azure."
                            />
                            <ExperienceItem
                                title="Principal Cloud and Product Security Engineer"
                                company="Dexcom"
                                period="2017 - 2018"
                                location="Greater San Diego Area"
                                description="Lead Cybersecurity Initiatives - Strategy, Framework, Engineering, Compliance, and Operation."
                            />
                            <ExperienceItem
                                title="Senior Information Security Engineer"
                                company="Intuit"
                                period="2016 - 2017"
                                location="Greater San Diego Area"
                                description="Security reference architecture, processes and cyber risk assessments."
                            />
                            <ExperienceItem
                                title="Linux Systems Architect"
                                company="University of San Diego"
                                period="2015 - 2016"
                                location="Greater San Diego Area"
                                description="Enterprise Linux System Architect for Academic and Research Platforms."
                            />
                            <ExperienceItem
                                title="Architect & Co-Founder"
                                company="Help Nepal"
                                period="May 2015 - Aug 2015"
                                description="Uniting Together To Help Nepal. Smart humanitarian programming."
                            />
                            <ExperienceItem
                                title="System Reliability Engineer II"
                                company="Ericsson"
                                period="2013 - 2015"
                                location="Overland Park, KS"
                                description="System Reliability Engineer for Data Mobility National Platforms."
                            />
                            <ExperienceItem
                                title="Linux/Hadoop System Engineer"
                                company="CafePress Inc."
                                period="May 2013 - Nov 2013"
                                location="Louisville, KY"
                            />
                            <ExperienceItem
                                title="Linux System Administrator"
                                company="Computerized Assessments & Learning"
                                period="Jan 2013 - May 2013"
                            />
                            <ExperienceItem
                                title="System Administrator (Graduate Assistant)"
                                company="Southern Illinois University"
                                period="2011 - 2012"
                                location="Carbondale, IL"
                            />
                            <ExperienceItem
                                title="Lead System and Security Engineer (Major)"
                                company="Nepalese Army"
                                period="2002 - 2010"
                                location="Kathmandu, Nepal"
                                description="Cyber-warfare Instructor. Subject Matter Expert (SME) of System Engineering, Information Security and Cyber-warfare."
                                isLast={true}
                            />
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-8">
                        {/* Skills */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Award className="text-blue-600" size={20} /> Skills
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {['Medical Device Security', 'Risk Management', 'FDA Design Controls', 'Threat Modeling', 'Penetration Testing', 'Cloud Security', 'Multiagents', 'Documentation', 'Fundraising'].map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <GraduationCap className="text-blue-600" size={20} /> Education
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">UC San Diego</h3>
                                    <p className="text-slate-500 text-xs mt-1">Embedded System Engineering (2023-2026)</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Stanford University</h3>
                                    <p className="text-slate-500 text-xs mt-1">Advanced Computer Security</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Southern Illinois University</h3>
                                    <p className="text-slate-500 text-xs mt-1">MS, Computer Science</p>
                                    <p className="text-slate-500 text-xs">Double Major: Geography</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Nanjing University of Sci & Tech</h3>
                                    <p className="text-slate-500 text-xs mt-1">Diploma, Computer Engineering</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Shield className="text-blue-600" size={20} /> Certifications
                            </h2>
                            <ul className="space-y-3">
                                {['Design Control Requirements', 'Learning GDPR', 'Certificate CVSS 4.0', 'Google Cybersecurity Specialization'].map((cert, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <span className="text-green-500 mt-0.5">✓</span>
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Publications */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <BookOpen className="text-blue-600" size={20} /> Publications
                            </h2>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="border-b border-slate-100 pb-2 last:border-0">Software Quality Challenges Ahead</li>
                                <li className="border-b border-slate-100 pb-2 last:border-0">Engineering Cyber Resilient Organizations for Insider Threats</li>
                                <li className="border-b border-slate-100 pb-2 last:border-0">Create Travel-tech Products In Nepal</li>
                                <li className="border-b border-slate-100 pb-2 last:border-0">Addressing security complexities for the Internet of Things</li>
                                <li>Ensure cybersecurity for biomedical device</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

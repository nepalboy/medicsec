import React from 'react';
import { Calendar, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const printArticles = [
    { src: 'images/print-articles/cybermedicaldevice-1.jpg', alt: 'Cyber Medical Device' },
    { src: 'images/print-articles/saluki.jpg', alt: 'Saluki' },
    { src: 'images/print-articles/academic-tourism.jpg', alt: 'Academic Tourism' },
    { src: 'images/print-articles/remote.jpg', alt: 'Remote Healthcare' },
    { src: 'images/print-articles/cybersecurity.jpg', alt: 'Cybersecurity' },
    { src: 'images/print-articles/kids.jpg', alt: 'Pediatric Device Security' },
    { src: 'images/print-articles/AImedicaldevice-1.jpg', alt: 'AI Medical Device' },
];

interface ArticleEntry {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    featured: boolean;
    technical?: boolean;
    externalUrl?: string;
}

const articles: ArticleEntry[] = [
    {
        id: 'cpss-2026',
        title: 'In Pursuit of the Most Beautiful Conference Venue: Cyber Patient Safety Symposium (CPSS) 2026',
        date: '29 Oct 2026',
        excerpt: 'Two days at the Seaside Forum and Ted Scripps Room in La Jolla: AI misreading a medical image during simulation, medical simulation as the cornerstone of learning medicine, security and quality debt, the open CVSS risk-score question, the missing holistic view across standards — and a proposal for three tracks: Red, Green, and Blue.',
        featured: true
    },
    {
        id: 'estar-cybersecurity-510k',
        title: 'eSTAR Cybersecurity Deliverables for 510(k) Submissions: The Complete List',
        date: '16 Oct 2026',
        excerpt: 'Every cybersecurity deliverable FDA expects in an eSTAR 510(k) — drawn from the February 2026 final guidance, with Section 524B statutory must-haves flagged and a fill-in template for each document.',
        featured: true
    },
    {
        id: 'ai-safety-challenges',
        title: 'AI Safety Challenges for Medical Devices: Quality Management, Safety Assurance, and Technical Limitations',
        date: '15 Oct 2026',
        excerpt: 'A deep dive into where AI strains ISO 13485 design controls and ISO 14971 hazard analysis, the technical limits bounding assurance — plus pointers to FDA AI guidance (PCCP, TPLC, 21 CFR 892.2055).',
        featured: false
    },
    {
        id: 'code-signing',
        title: 'How to Code Sign, Step by Step',
        date: '16 Sep 2026',
        excerpt: 'A practical, hands-on walkthrough of digital signing on Linux — from hashing a file, to generating an RSA-4096 signing key pair, to verifying the signature on the receiver side.',
        featured: false,
        technical: true,
        externalUrl: '/code-signing/'
    },
    {
        id: 'cyber-safety-dilemma',
        title: 'Transposing Cybersecurity-to-Safety Risks in Medical Devices: The Dilemma of Mathematical Conversion vs. Judgmental Linkage',
        date: '24 Apr 2026',
        excerpt: 'Exploring why cybersecurity and safety risk management must remain distinct yet coordinated processes, avoiding the pitfalls of mathematical fusion.',
        featured: true
    },
    {
        id: 'evolving-risk',
        title: 'Evolving Risk Paradigms: Why Medical Device Security Demands a New Approach',
        date: '02 Nov 2025',
        excerpt: 'The convergence of digital technologies and clinical functionality in modern medical devices has necessitated a paradigm shift in how risk is assessed and managed.',
        featured: true
    },
    {
        id: 'post-market-surveillance',
        title: 'Understanding Post-Market Surveillance',
        date: '15 Jan 2025',
        excerpt: 'Key strategies for maintaining security posture after device deployment. Continuous monitoring and vulnerability management are critical.',
        featured: false
    }
];

export const Articles: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Articles & Insights</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Latest thoughts on medical device security, standards, and industry trends.
                    </p>
                </div>

                {/* Blog Articles */}
                <div className="grid gap-8 mb-20">
                    {articles.map((article) => {
                        const cardClass = "block bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group";
                        const cardInner = (
                            <>
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                                    {article.featured && (
                                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold uppercase">Featured</span>
                                    )}
                                    {article.technical && (
                                        <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-bold uppercase">Technical</span>
                                    )}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </>
                        );
                        return article.externalUrl ? (
                            <a key={article.id} href={article.externalUrl} className={cardClass}>
                                {cardInner}
                            </a>
                        ) : (
                            <Link
                                key={article.id}
                                to={`/articles/${article.id}`}
                                className={cardClass}
                            >
                                {cardInner}
                            </Link>
                        );
                    })}
                </div>

                {/* Print Articles Section */}
                <div id="print-articles" className="border-t border-slate-100 pt-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <ImageIcon className="text-blue-600" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Print Articles Collection</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {printArticles.map((img, index) => {
                            // Extract ID from filename (e.g., 'images/print-articles/saluki.jpg' -> 'saluki')
                            const id = img.src.split('/').pop()?.replace('.jpg', '') || '';

                            return (
                                <Link key={index} to={`/articles/print/${id}`} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 shadow-sm hover:shadow-lg transition-all cursor-pointer block">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <p className="text-white font-medium text-sm">{img.alt}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

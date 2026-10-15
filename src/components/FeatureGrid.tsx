import React from 'react';
import { Brain, FileText, PenTool, CheckCircle, LayoutTemplate, GraduationCap, HeartPulse, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Feature {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    cardBg: string;
    chipBg: string;
    iconColor: string;
    pillBg: string;
    link: string;
    external?: boolean;
    articleCount: number;
    articleLabel: string;
}

const features: Feature[] = [
    {
        icon: Brain,
        title: 'Medical AI Security',
        description: 'Security considerations for AI/ML enabled medical devices.',
        cardBg: 'bg-purple-100',
        chipBg: 'bg-white',
        iconColor: 'text-purple-600',
        pillBg: 'bg-purple-600',
        link: '/mas',
        articleCount: 3,
        articleLabel: '3 articles'
    },
    {
        icon: FileText,
        title: 'Standards & Frameworks',
        description: 'Navigating FDA, MDR, and global cybersecurity standards.',
        cardBg: 'bg-blue-100',
        chipBg: 'bg-white',
        iconColor: 'text-blue-600',
        pillBg: 'bg-blue-600',
        link: '/sfs',
        articleCount: 3,
        articleLabel: '3 articles'
    },
    {
        icon: PenTool,
        title: 'Design Controls',
        description: 'Integrating security into the design control process.',
        cardBg: 'bg-green-100',
        chipBg: 'bg-white',
        iconColor: 'text-green-600',
        pillBg: 'bg-green-600',
        link: '/dc',
        articleCount: 2,
        articleLabel: '2 articles'
    },
    {
        icon: CheckCircle,
        title: 'Verification & Validation',
        description: 'Testing strategies for security requirements.',
        cardBg: 'bg-orange-100',
        chipBg: 'bg-white',
        iconColor: 'text-orange-600',
        pillBg: 'bg-orange-600',
        link: '/vv',
        articleCount: 3,
        articleLabel: '3 articles'
    },
    {
        icon: GraduationCap,
        title: 'Training, Presentations & Print Articles',
        description: 'Security education, conference presentations, and published research.',
        cardBg: 'bg-teal-100',
        chipBg: 'bg-white',
        iconColor: 'text-teal-600',
        pillBg: 'bg-teal-600',
        link: '/training-awareness',
        articleCount: 10,
        articleLabel: '10 resources'
    },
    {
        icon: LayoutTemplate,
        title: 'Templates',
        description: 'Ready-to-use templates for security documentation.',
        cardBg: 'bg-pink-100',
        chipBg: 'bg-white',
        iconColor: 'text-pink-600',
        pillBg: 'bg-pink-600',
        link: '/templates',
        articleCount: 2,
        articleLabel: '2 templates'
    },
    {
        icon: Database,
        title: 'FDA Data',
        description: 'Business intelligence, innovations, warnings, and field actions from FDA device data.',
        cardBg: 'bg-amber-100',
        chipBg: 'bg-white',
        iconColor: 'text-amber-600',
        pillBg: 'bg-amber-600',
        link: '/fda-data',
        articleCount: 4,
        articleLabel: '4 topics'
    },
    {
        icon: HeartPulse,
        title: 'Safety',
        description: 'Patient safety first: hazard analysis, safety–security linkage, and AI safety assurance.',
        cardBg: 'bg-red-100',
        chipBg: 'bg-white',
        iconColor: 'text-red-600',
        pillBg: 'bg-red-600',
        link: '/safety',
        articleCount: 2,
        articleLabel: '2 articles'
    }
];

export const FeatureGrid: React.FC = () => {
    return (
        <section className="py-12 bg-slate-50 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Areas of Focus</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Engineering end-to-end processes across the Total Product Life Cycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const cardClass = `relative block ${feature.cardBg} p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group`;
                        const cardInner = (
                            <>
                                <span className={`absolute top-4 right-4 ${feature.pillBg} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                                    {feature.articleLabel}
                                </span>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.chipBg} shadow-sm`}>
                                    <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors pr-16">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </>
                        );
                        return feature.external ? (
                            <a key={index} href={feature.link} className={cardClass}>
                                {cardInner}
                            </a>
                        ) : (
                            <Link key={index} to={feature.link} className={cardClass}>
                                {cardInner}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

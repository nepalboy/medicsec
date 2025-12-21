import React from 'react';
import { Brain, FileText, PenTool, CheckCircle, LayoutTemplate, Newspaper, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
    {
        icon: Brain,
        title: 'Medical AI Security',
        description: 'Security considerations for AI/ML enabled medical devices.',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        link: '/mas'
    },
    {
        icon: FileText,
        title: 'Standards & Frameworks',
        description: 'Navigating FDA, MDR, and global cybersecurity standards.',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        link: '/sfs'
    },
    {
        icon: PenTool,
        title: 'Design Controls',
        description: 'Integrating security into the design control process.',
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        link: '/dc'
    },
    {
        icon: CheckCircle,
        title: 'Verification & Validation',
        description: 'Testing strategies for security requirements.',
        color: 'text-orange-500',
        bg: 'bg-orange-500/10',
        link: '/vv'
    },
    {
        icon: GraduationCap,
        title: 'Training and Awareness',
        description: 'Building a culture of security through education programs.',
        color: 'text-teal-500',
        bg: 'bg-teal-500/10',
        link: '/training-awareness'
    },
    {
        icon: LayoutTemplate,
        title: 'Templates',
        description: 'Ready-to-use templates for security documentation.',
        color: 'text-pink-500',
        bg: 'bg-pink-500/10',
        link: '/templates'
    },
    {
        icon: Newspaper,
        title: 'Print Articles',
        description: 'Published research and industry articles.',
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
        link: '/articles'
    }
];

export const FeatureGrid: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Areas of Focus</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Comprehensive resources covering the entire medical device security lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            to={feature.link}
                            className="block bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.bg}`}>
                                <feature.icon className={`h-8 w-8 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

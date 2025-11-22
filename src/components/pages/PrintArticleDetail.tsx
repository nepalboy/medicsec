import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const printArticles = {
    'cybermedicaldevice-1': { src: 'images/print-articles/cybermedicaldevice-1.jpg', title: 'Cyber Medical Device' },
    'saluki': { src: 'images/print-articles/saluki.jpg', title: 'Saluki' },
    'academic-tourism': { src: 'images/print-articles/academic-tourism.jpg', title: 'Academic Tourism' },
    'remote': { src: 'images/print-articles/remote.jpg', title: 'Remote Healthcare' },
    'cybersecurity': { src: 'images/print-articles/cybersecurity.jpg', title: 'Cybersecurity' },
    'kids': { src: 'images/print-articles/kids.jpg', title: 'Pediatric Device Security' },
    'AImedicaldevice-1': { src: 'images/print-articles/AImedicaldevice-1.jpg', title: 'AI Medical Device' },
};

export const PrintArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const article = id ? printArticles[id as keyof typeof printArticles] : undefined;

    if (!article) {
        return (
            <div className="py-24 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Article not found</h2>
                <Link to="/articles" className="text-blue-600 hover:underline mt-4 inline-block">Back to Articles</Link>
            </div>
        );
    }

    return (
        <div className="bg-white py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Articles
                </Link>

                <h1 className="text-3xl font-bold text-slate-900 mb-8">{article.title}</h1>

                <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                        src={`/${article.src}`}
                        alt={article.title}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

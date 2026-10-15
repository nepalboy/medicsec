import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ArrowRight, Calendar } from 'lucide-react';

export interface RelatedArticle {
    title: string;
    date: string;
    link: string;
    external?: boolean;
}

interface RelatedArticlesProps {
    articles: RelatedArticle[];
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
    if (articles.length === 0) return null;
    return (
        <div className="border-t border-slate-100 pt-12 mt-4">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <Newspaper className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Articles in this area</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => {
                    const cardClass = "block bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group";
                    const cardInner = (
                        <>
                            <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                                <Calendar size={14} /> {article.date}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {article.title}
                            </h3>
                            <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium group-hover:gap-3 transition-all">
                                Read Article <ArrowRight size={14} />
                            </span>
                        </>
                    );
                    return article.external ? (
                        <a key={index} href={article.link} className={cardClass}>{cardInner}</a>
                    ) : (
                        <Link key={index} to={article.link} className={cardClass}>{cardInner}</Link>
                    );
                })}
            </div>
        </div>
    );
};

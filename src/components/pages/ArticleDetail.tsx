import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export const ArticleDetail: React.FC = () => {
    const { id } = useParams();

    return (
        <div className="bg-white py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Articles
                </Link>

                <article>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                            <span className="flex items-center gap-1"><Calendar size={16} /> 02 Nov 2025</span>
                            <span className="flex items-center gap-1"><User size={16} /> Ravi Dhungel</span>
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            {id === 'evolving-risk' ? 'Evolving Risk Paradigms: Why Medical Device Security Demands a New Approach' :
                                id === 'post-market-surveillance' ? 'Understanding Post-Market Surveillance' :
                                    id === 'print-articles' ? 'Print Articles Collection' :
                                        'Article Title Placeholder'}
                        </h1>
                    </header>

                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8">
                            This is a placeholder for the full article content. In a real application, this content would be fetched from a CMS or database based on the article ID: <code>{id}</code>.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h3>The Challenge</h3>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h3>The Solution</h3>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

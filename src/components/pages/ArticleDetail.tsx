import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface ArticleContent {
    title: string;
    date: string;
    author: string;
    image?: string;
    content: React.ReactNode;
}

const articleData: Record<string, ArticleContent> = {
    'cyber-safety-dilemma': {
        title: 'Transposing Cybersecurity-to-Safety Risks in Medical Devices: The Dilemma of Mathematical Conversion vs. Judgmental Linkage',
        date: '24 Apr 2026',
        author: 'Ravi Dhungel',
        image: '/images/articles/cyber-safety-viz.png',
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    ISO 14971 safety risk is grounded in classical probability theory, while cybersecurity risk operates under structurally different assumptions. 
                    This article explores why direct mathematical transposition fails and proposes a linkage-based integration model.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">1. Mathematical Incompatibility of the Two Domains</h3>
                <p>
                    ISO 14971 safety risk is defined as: <strong>R = P(harm | hazardous situation) × Severity</strong>. 
                    Here, P is a frequentist or credence-based probability derived from repeatable events under relatively stable conditions.
                </p>
                <p>
                    Cybersecurity risk, however, focuses on <strong>exploitability</strong>, which is not a random variable. 
                    Threat actors are adaptive, goal-directed, and context-sensitive. Assigning numeric likelihoods to exploitability produces "pseudo-mathematics"—the appearance of rigor without formal validity.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">2. Failure Modes of Direct Transposition</h3>
                <div className="overflow-x-auto my-8">
                    <table className="min-w-full border-collapse border border-slate-200 text-left text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Approach</th>
                                <th className="px-4 py-2 border border-slate-200 font-bold">Failure Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Map CVSS base score → safety P category</td>
                                <td className="px-4 py-2 border border-slate-200">CVSS is ordinal and context-dependent; cardinality assumptions are invalid</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Assign exploitability → P(attack) in risk matrix</td>
                                <td className="px-4 py-2 border border-slate-200">Treats a judgment variable as a frequentist probability; no justifiable distribution</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Composite risk score (cyber + safety)</td>
                                <td className="px-4 py-2 border border-slate-200">Mixes non-probabilistic and probabilistic quantities; violates measure theory</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-slate-200">Bayesian prior on attacker intent</td>
                                <td className="px-4 py-2 border border-slate-200">Requires stable base rates; adaptive adversaries invalidate stationarity assumption</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">3. Limits of Advanced Quantitative Techniques</h3>
                <p>
                    Techniques like Monte Carlo simulation and Bayesian networks are often proposed as bridges, but they fail because they require valid input distributions which, in cybersecurity, are assumed rather than derived.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Monte Carlo:</strong> Garbage-in-garbage-out applies directly when input distributions are guessed.</li>
                    <li><strong>Bayesian inference:</strong> Posterior probabilities are only meaningful when the prior is over a stable probability space, not an opinion about attacker capability.</li>
                    <li><strong>Expert judgment:</strong> Calibrated qualitative judgments (high/medium/low) are appropriate; unitless decimal values are not.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">4. Linkage-Based Integration Model</h3>
                <p>
                    The normative solution, as represented in AAMI TIR57, is parallel, coordinated processes with structured information handoffs, not mathematical fusion. The correct integration follows a conditional structure:
                </p>
                <ol className="list-decimal pl-6 space-y-4 my-6">
                    <li>
                        <strong>Cybersecurity analysis:</strong> Characterize the threat and adverse impact. 
                        <em>Output: "unauthorized modification of infusion rate parameter is credible."</em>
                    </li>
                    <li>
                        <strong>Causal safety linkage:</strong> Expert judgment determines if the cyber condition precipitates a hazardous situation. 
                        <em>Output: "if realized, incorrect dose delivery is a foreseeable hazardous situation."</em>
                    </li>
                    <li>
                        <strong>Safety risk estimation:</strong> Estimate P(harm | hazardous situation) assuming the hazardous situation exists.
                    </li>
                </ol>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                    <p className="font-mono text-center text-blue-800">
                        R_safety = P(harm | HS) × S, where HS is established by cybersecurity causal linkage
                    </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">5. Conclusion</h3>
                <p>
                    Cybersecurity and safety risk management answer different questions under different mathematical assumptions. 
                    Attempts to convert exploitability into safety probability introduce formal invalidity. 
                    The linkage-based model preserves both domains' integrity through causal reasoning rather than numerical conversion.
                </p>
            </>
        )
    },
    'evolving-risk': {
        title: 'Evolving Risk Paradigms: Why Medical Device Security Demands a New Approach',
        date: '02 Nov 2025',
        author: 'Ravi Dhungel',
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    The convergence of digital technologies and clinical functionality in modern medical devices has necessitated a paradigm shift in how risk is assessed and managed.
                </p>
                <p>
                    Historically, safety and security risk assessments have operated in parallel but separate domains. 
                    Safety focused on random component failures and foreseeable misuse, while security focused on intentional adversarial actions.
                </p>
                <h3>The Challenge</h3>
                <p>
                    In the modern connected ecosystem, a security vulnerability can directly lead to a safety hazard. 
                    However, the probabilistic models used in ISO 14971 do not directly translate to the intentional, non-random nature of cyber attacks.
                </p>
            </>
        )
    },
    'post-market-surveillance': {
        title: 'Understanding Post-Market Surveillance',
        date: '15 Jan 2025',
        author: 'Ravi Dhungel',
        content: (
            <>
                <p className="lead text-xl text-slate-600 mb-8">
                    Key strategies for maintaining security posture after device deployment. 
                    Continuous monitoring and vulnerability management are critical.
                </p>
                <p>
                    Post-market surveillance is not just a regulatory requirement; it's a vital security function. 
                    As new vulnerabilities are discovered in the wild (0-days, library vulnerabilities like Log4j), manufacturers must have robust processes to assess and mitigate them.
                </p>
            </>
        )
    }
};

export const ArticleDetail: React.FC = () => {
    const { id } = useParams();
    const article = articleData[id || ''] || {
        title: 'Article Not Found',
        date: 'N/A',
        author: 'Unknown',
        content: <p>The article you are looking for could not be found.</p>
    };

    return (
        <div className="bg-white py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Articles
                </Link>

                <article>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                            <span className="flex items-center gap-1"><Calendar size={16} /> {article.date}</span>
                            <span className="flex items-center gap-1"><User size={16} /> {article.author}</span>
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            {article.title}
                        </h1>
                        {article.image && (
                            <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                                <img src={article.image} alt={article.title} className="w-full h-auto" />
                            </div>
                        )}
                    </header>

                    <div className="prose prose-lg prose-slate max-w-none">
                        {article.content}
                    </div>

                    <footer className="mt-16 pt-8 border-t border-slate-200">
                        <p className="text-sm text-slate-500 italic">
                            All the views expressed in the article are personal and do not reflect the views of my previous or current employer.
                        </p>
                    </footer>
                </article>
            </div>
        </div>
    );
};

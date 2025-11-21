import React from 'react';
import { Shield, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Navigation */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <Link to="/" className="font-bold text-xl tracking-tight text-slate-900">MedicSec</Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
                            <Link to="/articles" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Articles</Link>
                            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</Link>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                                Subscribe
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-600 hover:text-slate-900 p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            <Link to="/" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-md font-medium">Home</Link>
                            <Link to="/articles" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-md font-medium">Articles</Link>
                            <Link to="/about" className="block px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-md font-medium">About</Link>
                            <div className="pt-2">
                                <button className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="h-6 w-6 text-blue-500" />
                                <span className="font-bold text-xl text-white">MedicSec</span>
                            </div>
                            <p className="text-sm leading-relaxed">
                                Building next generation secure and safe medical devices.
                                Bridging the gap between clinical safety and cybersecurity.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/mas" className="hover:text-blue-400 transition-colors">Medical AI Security</Link></li>
                                <li><Link to="/sfs" className="hover:text-blue-400 transition-colors">Standards & Frameworks</Link></li>
                                <li><Link to="/dc" className="hover:text-blue-400 transition-colors">Design Controls</Link></li>
                                <li><Link to="/vv" className="hover:text-blue-400 transition-colors">Verification & Validation</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} MedicSec. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

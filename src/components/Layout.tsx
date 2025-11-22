import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Navigation */}
            <nav className="bg-blue-900 border-b border-blue-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="flex items-center gap-3">
                            <Logo />
                            <Link to="/" className="font-bold text-2xl tracking-tight text-white">MedicSec</Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-blue-100 hover:text-white font-medium transition-colors">Home</Link>
                            <Link to="/articles" className="text-blue-100 hover:text-white font-medium transition-colors">Articles</Link>
                            <Link to="/about" className="text-blue-100 hover:text-white font-medium transition-colors">About</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-blue-100 hover:text-white p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-blue-900 border-t border-blue-800 absolute w-full shadow-lg">
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            <Link to="/" className="block px-3 py-2 text-blue-100 hover:bg-blue-800 hover:text-white rounded-md font-medium">Home</Link>
                            <Link to="/articles" className="block px-3 py-2 text-blue-100 hover:bg-blue-800 hover:text-white rounded-md font-medium">Articles</Link>
                            <Link to="/about" className="block px-3 py-2 text-blue-100 hover:bg-blue-800 hover:text-white rounded-md font-medium">About</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-blue-950 text-blue-200 py-12 border-t border-blue-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Logo />
                                <span className="font-bold text-xl text-white">MedicSec</span>
                            </div>
                            <p className="text-sm leading-relaxed text-blue-300">
                                Building next generation secure and safe medical devices.
                                Bridging the gap between clinical safety and cybersecurity.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/mas" className="hover:text-white transition-colors">Medical AI Security</Link></li>
                                <li><Link to="/sfs" className="hover:text-white transition-colors">Standards & Frameworks</Link></li>
                                <li><Link to="/dc" className="hover:text-white transition-colors">Design Controls</Link></li>
                                <li><Link to="/vv" className="hover:text-white transition-colors">Verification & Validation</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/ravidhungel/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-blue-900 pt-8 text-center text-sm text-blue-400">
                        <p>&copy; {new Date().getFullYear()} MedicSec. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

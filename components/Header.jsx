import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'About', to: '#about' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' },
    { name: 'Contact', to: '#contact' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Track active section based on scroll (for hash-based active styling)
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeInOut' } },
    };

    return (
        <motion.header
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="fixed top-0 left-0 right-0 z-[999] border-b border-purple-500/30 shadow-2xl"
            style={{
                backgroundColor: 'rgba(7, 21, 38, 0.85)', // #071526 with transparency
                backdropFilter: 'blur(12px)',
            }}
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-purple-900/20" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">

                    {/* Logo / Name */}
                    <HashLink
                        to="/#"
                        smooth
                        className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-90 transition"
                    >
                        FlexyDev
                    </HashLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.name}
                                whileHover={{ y: -3 }}
                                className="relative"
                            >
                                <HashLink
                                    to={item.to}
                                    smooth
                                    className={`font-medium text-lg transition duration-300 ${activeSection === item.to.slice(1)
                                            ? 'text-cyan-300'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                    {/* Active Indicator */}
                                    {activeSection === item.to.slice(1) && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                                        />
                                    )}
                                </HashLink>
                            </motion.div>
                        ))}

                        {/* CTA Button */}
                        <motion.a
                            href="https://wa.me/+2347019577768"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-6 px-6 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/40 hover:shadow-cyan-500/60 transition"
                        >
                            Hire Me
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </motion.svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                className="md:hidden border-t border-purple-500/30"
            >
                <div className="px-4 pt-4 pb-6 space-y-3">
                    {navItems.map((item) => (
                        <HashLink
                            key={item.name}
                            to={item.to}
                            smooth
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 text-lg font-medium rounded-lg transition ${activeSection === item.to.slice(1)
                                    ? 'bg-gradient-to-r from-purple-900/50 to-cyan-900/50 text-cyan-300'
                                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {item.name}
                        </HashLink>
                    ))}
                    <a
                        href="mailto:alade.felix@example.com"
                        className="block w-full text-center mt-4 px-6 py-3 text-lg font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Hire Me
                    </a>
                </div>
            </motion.div>
        </motion.header>
    );
};

export default Header;
// src/components/Footer.jsx (Extraordinary Cyberpunk Edition)

import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mt-20 overflow-hidden"
            style={{ backgroundColor: '#071526' }}
        >
            {/* Futuristic Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-cyan-900/30" />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,0,255,0.03) 35px, rgba(255,0,255,0.03) 70px)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
                    {/* Left: Signature & Copyright */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-3"
                    >
                        <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Flexy.Dev
                        </h3>
                        <p className="text-gray-400 text-sm">
                            © {currentYear} All rights reserved.
                        </p>
                    </motion.div>

                    {/* Center: Built With Love */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <p className="text-gray-300 text-sm uppercase tracking-wider">Crafted with</p>
                        <div className="flex items-center gap-6">
                            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="text-cyan-400">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-10 h-10" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2, rotate: -5 }} className="text-purple-400">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="w-12 h-12" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="text-pink-400">
                                <img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="" className="w-12 h-9" />
                            </motion.div>
                        </div>
                        <p className="text-gray text-sm font-medium mt-2">React • Tailwind • framer</p>
                    </motion.div>

                    {/* Right: Social & Back to Top */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col items-center md:items-end gap-6"
                    >
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <motion.a
                                href="https://github.com/oluwapelumifelix001"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-3 rounded-full bg-white/10 backdrop-blur border border-purple-500/50 hover:border-cyan-400 hover:bg-cyan-500/20 transition"
                            >
                                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-6 h-6 invert" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/felix-oluwapelumi-abb539367/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-3 rounded-full bg-white/10 backdrop-blur border border-purple-500/50 hover:border-cyan-400 hover:bg-cyan-500/20 transition"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6" />
                            </motion.a>
                        </div>

                        {/* Back to Top Button */}
                        <HashLink
                            to="/#"
                            smooth
                            className="group flex items-center gap-2 text-cyan-300 hover:text-cyan-100 transition"
                        >
                            <span className="text-sm font-medium">Back to Top</span>
                            <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7" />
                            </motion.svg>
                        </HashLink>
                    </motion.div>
                </div>

                {/* Final Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 text-xs tracking-widest uppercase">
                        Turning Vision Into Digital Reality
                    </p>
                </motion.div>
            </div>

            {/* Floating Back to Top (Alternative Fixed Button - Optional) */}
            <HashLink
                to="/#"
                smooth
                aria-label="Scroll to top"
                className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/60 transition transform hover:scale-110"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </HashLink>
        </motion.footer>
    );
};

export default Footer;
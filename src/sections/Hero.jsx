// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [displayedName, setDisplayedName] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const fullName = 'Alade Felix Oluwapelumi';

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typing effect
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullName.length) {
                setDisplayedName(fullName.slice(0, index + 1));
                index++;
            } else {
                setIsTypingComplete(true);
                clearInterval(timer);
            }
        }, 100); // Speed of typing (adjust as needed)

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center text-white">
            {/* Parallax Background Layers */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
                    transform: `translateY(${offsetY * 0.4}px)`,
                }}
            />
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                    transform: `translateY(${offsetY * 0.2}px)`,
                }}
            />

            {/* Dark Overlay + Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071526]/80 to-[#071526]" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-cyan-900/30" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight inline-block"
                >
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {displayedName}
                    </span>
                    {/* Blinking cursor - only show while typing */}
                    {!isTypingComplete && (
                        <span className="inline-block w-1 h-full bg-white animate-pulse ml-1 align-middle" />
                    )}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: isTypingComplete ? 0.3 : fullName.length * 0.1 + 0.8 }}
                    className="mt-6 text-2xl md:text-4xl font-light text-gray-300"
                >
                    Full Stack Developer & Digital Architect
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: isTypingComplete ? 0.5 : fullName.length * 0.1 + 1 }}
                    className="mt-4 text-lg md:text-xl text-cyan-300 font-medium"
                >
                    MERN Stack • Next.js • Tailwind • Firebase • Framer Motion
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: isTypingComplete ? 0.7 : fullName.length * 0.1 + 1.2 }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <HashLink
                        to="#projects"
                        smooth
                        className="px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/60 transform hover:scale-105 transition duration-300"
                    >
                        Explore My Work
                    </HashLink>
                    <HashLink
                        to="#contact"
                        smooth
                        className="px-8 py-4 text-lg font-bold rounded-full border-2 border-cyan-400 text-cyan-300 backdrop-blur-md bg-white/5 hover:bg-cyan-500/20 hover:text-white transition duration-300"
                    >
                        Get In Touch
                    </HashLink>
                </motion.div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isTypingComplete ? 1 : fullName.length * 0.1 + 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="w-8 h-14 border-2 border-cyan-400 rounded-full flex justify-center"
                >
                    <motion.span
                        animate={{ y: [0, 24, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                        className="w-2 h-4 bg-cyan-400 rounded-full mt-3"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
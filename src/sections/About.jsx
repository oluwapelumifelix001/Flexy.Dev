// src/sections/About.jsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
};
const imgSrc = "./assets/my.jpeg"; // Add your image URL here
const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const imgSrc = "/src/assets/my.jpeg"; // Add your image URL here

    return (
        <section
            id="about"
            ref={ref}
            style={{ backgroundColor: '#071526' }}
            className="py-20 md:py-32 px-4 text-white relative overflow-hidden"
        >
            
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url('https://thumbs.dreamstime.com/b/futuristic-digital-technology-abstract-background-glowing-blue-lines-circuit-patterns-innovation-data-connectivity-376269123.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg md:text-xl">
                        Crafting digital experiences that blend creativity, performance, and scalability.
                    </p>
                </motion.div>

                {/* Main Grid: Image + Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left: Profile Image with Glow Effect */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-500" />
                            <img
                                src={imgSrc}
                                alt="Alade Felix Oluwapelumi - Full Stack Developer"
                                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-purple-500 shadow-2xl transition transform group-hover:scale-105 duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Narrative + Expertise Card */}
                    <div className="space-y-8">
                        {/* Storytelling */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-3xl font-bold text-cyan-400">
                                Full-Stack Developer & Digital Architect
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Hi, I'm <span className="text-white font-semibold">Alade Felix Oluwapelumi (Flexy.Dev)</span> — A dedicated developer and LAUTECH Computer Science student, specializing in full-stack engineering through the rigorous program at SQI College of ICT. I leverage academic knowledge to build robust, efficient, and well-designed solutions, focusing on clean code and scalable system architecture
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                I thrive at the intersection of design and code, specializing in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) enhanced with Next.js, TypeScript, and cutting-edge tools. From pixel-perfect responsive UIs to secure, scalable backends — I deliver end-to-end solutions with clean architecture and obsessive attention to detail.
                            </p>
                            <p className="text-cyan-400 font-semibold text-xl">
                                Turning ideas into impactful, fast, and beautiful digital products.
                            </p>
                        </motion.div>

                        {/* Expertise Highlights (Glassmorphism Card) */}
                        <motion.div
                            variants={itemVariants}
                            className="p-8 rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-xl shadow-2xl"
                        >
                            <h4 className="text-2xl font-bold mb-6 text-cyan-400 border-b border-purple-500/40 pb-4">
                                Core Strengths
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-200">
                                <li className="flex items-center space-x-3">
                                    <span className="text-purple-400">▹</span>
                                    <span>React / Next.js (SSR & SSG)</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-purple-400">▹</span>
                                    <span>Node.js & Express APIs</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-purple-400">▹</span>
                                    <span>MongoDB & Database Design</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-purple-400">▹</span>
                                    <span>Tailwind CSS & Framer Motion</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-purple-400">▹</span>
                                    <span>Firebase & Authentication</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-purple-400">▹</span>
                                    <span>Vercel / Docker / CI-CD</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
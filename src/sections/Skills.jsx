// src/sections/Skills.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 120 },
    },
};

const skillsData = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', level: 95, logo: 'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png' },
            { name: 'Next.js', level: 90, logo: 'https://iconape.com/wp-content/files/gf/82292/svg/nextjs-3.svg' },
            { name: 'JavaScript (ES6+)', level: 92, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { name: 'Tailwind CSS', level: 94, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png' },
            { name: 'HTML5 / CSS3', level: 98, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
            { name: 'Framer Motion', level: 88, logo: 'https://framer.com/images/logo.svg' },
            { name: 'UI/UX Design', level: 85, logo: 'https://img.icons8.com/color/96/000000/ui-design.png' },
        ],
    },
    {
        category: 'Backend & Runtime',
        skills: [
            { name: 'Node.js', level: 93, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' },
            { name: 'Express.js', level: 90, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
            { name: 'REST APIs', level: 92, logo: 'https://img.icons8.com/color/96/000000/api.png' },
            { name: 'Authentication', level: 88, logo: 'https://img.icons8.com/color/96/000000/shield.png' },
        ],
    },
    {
        category: 'Databases & Cloud',
        skills: [
            { name: 'MongoDB', level: 92, logo: 'https://images.contentstack.io/v3/assets/blt7151619cb9560896/bltac81c4aa3529ee37/65fd965e8f4444482dc3a079/la1a2b2h67gwwqnvs-mdb-logos.svg' },
            { name: 'Firebase', level: 87, logo: 'https://static.cdnlogo.com/logos/f/30/firebase.svg' },
            { name: 'Mongoose', level: 88, logo: 'https://mongoosejs.com/docs/images/mongoose-logo.png' },
            { name: 'SQL', level: 80, logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
        ],
    },
    {
        category: 'Tools & DevOps',
        skills: [
            { name: 'Git / GitHub', level: 95, logo: 'https://brand.github.com/_next/static/media/logo-09.74e790e1.png' },
            { name: 'Vercel', level: 90, logo: 'https://1000logos.net/wp-content/uploads/2024/08/Vercel-Emblem.png' },
            { name: 'Netlify', level: 85, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Netlify_logo.svg/2560px-Netlify_logo.svg.png' },
            { name: 'Postman', level: 88, logo: 'https://voyager.postman.com/logo/postman-logo-icon-orange.svg' },
            { name: 'VS Code', level: 98, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
        ],
    },
];

const primarySkills = ['React', 'Node.js', 'MongoDB', 'Next.js', 'Tailwind CSS'];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section
            id="skills"
            ref={ref}
            className="py-20 md:py-32 px-4 text-white relative overflow-hidden"
            style={{ backgroundColor: '#071526' }}
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-600 via-cyan-600 to-purple-800" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        Technical Arsenal
                    </h2>
                    <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                        Tools and technologies I master to deliver fast, scalable, and beautiful applications.
                    </p>
                </motion.div>

                {/* Orbiting Core Skills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="relative flex justify-center items-center mb-24 h-80 md:h-96"
                >
                    {/* Central Orb */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute p-10 rounded-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-md border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/30"
                        whileHover={{ scale: 1.08, rotate: 5 }}
                    >
                        <span className="text-2xl md:text-3xl font-extrabold text-cyan-300 text-center leading-tight">
                            FULLSTACK <br /> ARCHITECT
                        </span>
                    </motion.div>

                    {/* Orbiting Primary Skills */}
                    {primarySkills.map((skillName, index) => {
                        const skill = skillsData.flatMap(g => g.skills).find(s => s.name === skillName);
                        if (!skill) return null;

                        const angle = (index / primarySkills.length) * 2 * Math.PI - Math.PI / 2;
                        const radius = window.innerWidth < 768 ? 140 : 200;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <motion.div
                                key={skillName}
                                variants={itemVariants}
                                className="absolute flex flex-col items-center gap-2"
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                                whileHover={{ scale: 1.2, zIndex: 50 }}
                            >
                                {/* <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:shadow-cyan-500/50 transition">
                                    <img src={skill.logo} alt={skillName} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                                </div> */}
                                {/* <span className="text-sm md:text-base font-medium text-cyan-300">{skillName}</span> */}
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Detailed Skills Grid with Progress Bars */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillsData.map((group) => (
                        <motion.div
                            key={group.category}
                            variants={itemVariants}
                            className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl hover:shadow-cyan-500/30 transition"
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-purple-500/40 pb-3">
                                {group.category}
                            </h3>
                            <ul className="space-y-5">
                                {group.skills.map((skill) => (
                                    <li key={skill.name} className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                                            <span className="text-gray-200 font-medium">{skill.name}</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
// src/sections/Projects.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ParallaxCard from '../../components/ParallaxCard'; // Your custom card component
import ZoomDriveImage from '../assets/ZoomDrive.png';
import Nova from '../assets/Nova.png';
import weather from '../assets/weather.png';
import Studyflow from '../assets/Studyflow.png';
import bims2 from '../assets/bims2.png'
const projectData = [

    {
        id: 1,
        title: "A full-Stack Car renting Website",
        description: "A modern car rental platform that lets users browse, filter, and book vehicles seamlessly with transparent pricing and flexible dates.",
        tags: ["react.js", "Tailwind CSS", "Node.js", "Express", "Framer Motion, MongoDB"],
        image: ZoomDriveImage,
        live: "https://zoomdrive-frontend-awhy.vercel.app/",
        code: "",
    },

        {
        id: 2,
        title: "Mini Study Platform for Students",
        description: "StudyFlow is a productivity web app designed to help students plan, stay organized, and stay connected while studying.Free Access to ai tools to enhance learning experience.",
        tags: ["Html", "Css", "Bootstrap", "JavaScript", "Firebase"],
        image: Studyflow, 
        live: "https://study-flow-omega.vercel.app",
        code: "https://github.com/oluwapelumifelix001/StudyFlow.git",
    },
        {
        id: 5,
        title: "Bimscent (Perfume website)",
        description: "Full-featured social network with posts, likes, comments, profiles, and real-time notifications.",
        tags: ["MERN Stack", "Socket.io", "Cloudinary", "Authentication"],
        image: bims2,
        live: "https://bimscent.vercel.app/",
        code: "#",
    },
    {
        id: 3,
        title: "Flexy Dual View ",
        description: "dual view website,weather application and add to cart built with HTML, CSS, Bootstrap and JavaScript.",
        tags: ["Html,Css,Bootstrap,Javascroipt,Api"],
        image: weather,
        live: "https://oluwapelumifelix001.github.io/Flexy-Dual-View/",
        code: "",
    },
    {
        id: 4,
        title: "Nova Bank",
        description: "Responsive banking  demo website with modern design, interactive features, and seamless user experience across devices.Built with HTML, CSS, and Bootstrap.",
        tags: ["HTML", "CSS", "Bootstrap", ],
        image: Nova,
        live: " https://oluwapelumifelix001.github.io/Novabank/",
        code: "#",
    },

    {
        id: 6,
        title: "Analytics Admin Dashboard",
        description: "Powerful data visualization dashboard with charts, user management, and dark/light mode toggle using React and Recharts.",
        tags: ["React", "Recharts", "Node.js", "Express", "MongoDB"],
        image: "https://i.ytimg.com/vi/wYpCWwD1oz0/maxresdefault.jpg",
        live: "#",
        code: "#",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 },
    },
};

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    return (
        <section
            id="projects"
            ref={ref}
            className="py-20 md:py-32 px-4 text-white relative overflow-hidden"
            style={{ backgroundColor: '#071526' }}
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-900 via-cyan-900 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
                        Real-world applications I've architected and built — showcasing clean code, performance, and modern design.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {projectData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <ParallaxCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;    
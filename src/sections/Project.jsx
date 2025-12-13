// src/sections/Projects.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ParallaxCard from '../../components/ParallaxCard'; // Your custom card component

const projectData = [
    {
        id: 1,
        title: "Mini Study Platform for Students",
        description: "StudyFlow is a productivity web app designed to help students plan, stay organized, and stay connected while studying.Free Access to ai tools to enhance learning experience.",
        tags: ["Html", "Css", "Bootstrap", "JavaScript", "Firebase"],
        image: "https://media.licdn.com/dms/image/v2/D4D22AQEmW8H5_m8wXw/feedshare-shrink_800/B4DZonC335GsAg-/0/1761591668425?e=1767225600&v=beta&t=N--oeJGUyPSHLBNRaOBRT479le_56IIa2ziaVWYW6xw", // Admin-style e-commerce dashboard
        live: "https://study-flow-omega.vercel.app",
        code: "https://github.com/oluwapelumifelix001/StudyFlow.git",
    },
    {
        id: 2,
        title: "A full-Stack Car renting Website",
        description: "A modern car rental platform that lets users browse, filter, and book vehicles seamlessly with transparent pricing and flexible dates.",
        tags: ["react.js", "Tailwind CSS", "Node.js", "Express", "Framer Motion, MongoDB"],
        image: "/src/assets/ZoomDrive.png",
        live: "",
        code: "",
    },
    {
        id: 3,
        title: "Cyberpunk Developer Portfolio",
        description: "This very portfolio — built with React, Framer Motion, and Tailwind for immersive animations and parallax effects.",
        tags: ["React", "Framer Motion", "Tailwind CSS", "Responsive Design"],
        image: "https://screenshots.webflow.com/sites/652a81c5d2f516632fee0f84/20231014120021_7b85610c939040d001baccc9b6b729a0.png",
        live: "",
        code: "",
    },
    // {
    //     id: 4,
    //     title: "Task Management Dashboard",
    //     description: "Kanban-style productivity app with drag-and-drop, team collaboration, and real-time updates using MERN stack.",
    //     tags: ["React", "Node.js", "MongoDB", "Firebase", "Drag & Drop"],
    //     image: "https://cdn.dribbble.com/userupload/43526377/file/original-aaf19be68fec764c9830e4a32937d18c.png?format=webp&resize=400x300&vertical=center",
    //     live: "#",
    //     code: "#",
    // },
    // {
    //     id: 5,
    //     title: "Social Media Platform (MERN)",
    //     description: "Full-featured social network with posts, likes, comments, profiles, and real-time notifications.",
    //     tags: ["MERN Stack", "Socket.io", "Cloudinary", "Authentication"],
    //     image: "https://user-images.githubusercontent.com/88021838/227129649-f1b47e2c-e71f-440c-ad11-ca456357fb15.png",
    //     live: "#",
    //     code: "#",
    // },
    // {
    //     id: 6,
    //     title: "Analytics Admin Dashboard",
    //     description: "Powerful data visualization dashboard with charts, user management, and dark/light mode toggle using React and Recharts.",
    //     tags: ["React", "Recharts", "Node.js", "Express", "MongoDB"],
    //     image: "https://i.ytimg.com/vi/wYpCWwD1oz0/maxresdefault.jpg",
    //     live: "#",
    //     code: "#",
    // },
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
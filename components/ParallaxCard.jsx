// src/components/ParallaxCard.jsx
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ParallaxCard = ({ project }) => {
    const cardRef = React.useRef(null);
    // Motion values to track mouse position (x, y coordinates)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Determines the maximum rotation angle
    const rotateLimit = 15;

    // Use useTransform to convert mouse position (x, y) into rotation (rotateX, rotateY)
    // - RotateY is based on horizontal movement (x)
    // - RotateX is based on vertical movement (y)
    // We reverse the rotation direction using the negative range on rotateX/Y
    const rotateX = useTransform(y, [-100, 100], [rotateLimit, -rotateLimit]);
    const rotateY = useTransform(x, [-100, 100], [-rotateLimit, rotateLimit]);

    // Use useTransform to adjust the shadow opacity and position based on rotation
    const shadowOpacity = useTransform([rotateX, rotateY], [
        [-rotateLimit, rotateLimit], // Input range for rotation
        [-rotateLimit, rotateLimit]
    ], [
        [0.4, 0.4], // Output opacity range (stays fairly constant)
        [0.4, 0.4]
    ]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Center coordinates of the card
        const centerX = rect.left + width / 2;
        const centerY = rect.top + height / 2;

        // Calculate distance from center, normalized to a range of -100 to 100
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const normalizedX = (mouseX / (width / 2)) * 100;
        const normalizedY = (mouseY / (height / 2)) * 100;
        
        x.set(normalizedX);
        y.set(normalizedY);
    };

    const handleMouseLeave = () => {
        // Reset rotation and position when mouse leaves
        x.set(0);
        y.set(0);
    };
    
    // Framer Motion spring configuration for smooth, quick reset
    const transitionConfig = {
        type: "spring",
        stiffness: 150,
        damping: 10,
        mass: 0.5,
    };

    return (
        <motion.div
            ref={cardRef}
            style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d", // Important for 3D perspective
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={transitionConfig}
            className="perspective-1000 relative bg-navy/70 p-6 rounded-xl border border-purple/30 
                       hover:border-neon/50 transition duration-300 shadow-2xl"
        >
            {/* 3D Shadow Element (moves with the tilt) */}
            <motion.div
                style={{ 
                    // Move the shadow opposite to the card tilt
                    translateX: useTransform(rotateY, [-rotateLimit, rotateLimit], [10, -10]),
                    translateY: useTransform(rotateX, [-rotateLimit, rotateLimit], [10, -10]),
                    opacity: shadowOpacity,
                    scale: 0.95
                }}
                transition={transitionConfig}
                className="absolute inset-0 bg-black/50 rounded-xl filter blur-xl -z-10"
            />

            {/* Project Image */}
            <div className="mb-4 aspect-video overflow-hidden rounded-lg border border-purple/20">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-neon mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-purple/30 text-neon rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
                <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm font-semibold text-white hover:text-neon transition duration-200"
                >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live Site
                </a>
                <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-sm font-semibold text-white hover:text-neon transition duration-200"
                >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    View Code
                </a>
            </div>
        </motion.div>
    );
};

export default ParallaxCard;
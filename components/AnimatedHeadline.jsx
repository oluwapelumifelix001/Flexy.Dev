// src/components/AnimatedHeadline.jsx (Responsive Fix)

import React from 'react';
import { motion } from 'framer-motion';

// ... (container and child variants remain the same) ...

const AnimatedHeadline = ({ text }) => {
    const words = text.split(" ");

    const container = { // <-- THE MISSING DEFINITION
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
};

const child = { // <-- THIS ONE IS ALSO NEEDED
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 12, stiffness: 100 } },
};

    return (
        <motion.div 
            variants={container} 
            initial="hidden" 
            animate="visible" 
            className="flex flex-wrap justify-center"
        >
            {words.map((word, index) => (
                <motion.span 
                    variants={child} 
                    key={index} 
                    // 🌟 FIX: Use responsive sizing (text-lg on mobile, md:text-xl, lg:text-2xl)
                    className="mr-1.5 text-lg md:text-xl lg:text-2xl font-mono text-neon" 
                >
                    <div></div>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedHeadline;
import React from 'react';
import { motion } from 'framer-motion';

// Parent container variants (staggers the animation of the children)
const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: {
            staggerChildren: 0.05, // Stagger delay between each word
            delayChildren: i * 0.5, // Start delay for the entire block
        },
    }),
};

// Child item variants (defines the animation for each word)
const item = {
    hidden: { 
        opacity: 0, 
        y: "100%", // Start from below its final position
        rotateX: -90 // Tilted back
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 10,
        },
    },
};

const AnimatedWord = ({ text, className, delay = 0 }) => {
    // Split the text into an array of words
    const words = text.split(" ");

    return (
        <motion.div
            className={`overflow-hidden inline-block ${className || ''}`}
            variants={container}
            initial="hidden"
            animate="visible"
            custom={delay} // Pass the delay as a custom prop to the container
        >
            {words.map((word, index) => (
                <motion.span 
                    key={index}
                    variants={item}
                    // Apply relative positioning to allow the 'y' animation to work correctly within the flow
                    className="inline-block relative whitespace-nowrap mr-2" 
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedWord;
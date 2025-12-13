// src/components/InteractiveGrid.jsx
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const InteractiveGrid = () => {
    // 1. Motion Values to track the spotlight position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 2. State for the component dimensions
    const [bounds, setBounds] = useState({ width: 0, height: 0 });

    // 3. Effect to set up the mouse listener
    useEffect(() => {
        const handleResize = () => {
            const container = document.getElementById('interactive-grid-container');
            if (container) {
                setBounds({ width: container.offsetWidth, height: container.offsetHeight });
            }
        };

        const handleMouseMove = (event) => {
            const container = document.getElementById('interactive-grid-container');
            if (!container) return;

            // Calculate mouse position relative to the container
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Update MotionValues
            mouseX.set(x);
            mouseY.set(y);
        };

        handleResize(); // Set initial bounds
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    // 4. Transform the raw mouse position into a CSS radial-gradient string
    const radialGradient = (x, y) => 
        `radial-gradient(400px circle at ${x}px ${y}px, rgba(0, 240, 255, 0.15) 0%, rgba(10, 25, 47, 0) 70%)`;

    return (
        <div id="interactive-grid-container" className="absolute inset-0 z-0">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-navy [background-size:100px_100px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

            {/* Spotlight Layer (Framer Motion) */}
            <motion.div
                style={{
                    // Use CSS custom properties for background tracking
                    '--mouse-x': mouseX,
                    '--mouse-y': mouseY,
                    background: 'var(--spotlight-gradient)',
                    // The magic: transform the MotionValues into a gradient string
                    '--spotlight-gradient': radialGradient(mouseX.get(), mouseY.get())
                }}
                className="pointer-events-none absolute inset-0 opacity-10 transition duration-500 ease-out"
                // On every frame, re-evaluate the background property
                onViewportBoxUpdate={() => {
                    const bg = radialGradient(mouseX.get(), mouseY.get());
                    // This function ensures the background is updated smoothly
                    return { background: bg };
                }}
            />
        </div>
    );
};

export default InteractiveGrid;
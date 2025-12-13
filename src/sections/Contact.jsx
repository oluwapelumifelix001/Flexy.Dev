// src/sections/Contact.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
};

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [status, setStatus] = useState('');


    const yourPhoneNumber = '2347019577768'; // From your phone card: +234 07019577768

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();

        if (!name || !email || !message) {
            setStatus('error');
            return;
        }

        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        const whatsappUrl = `https://wa.me/${yourPhoneNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');

        setStatus('success');
        e.target.reset();

        // Reset status after 5 seconds
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="py-20 md:py-32 px-4 text-white relative overflow-hidden"
            style={{ backgroundColor: '#071526' }}
        >
            {/* Futuristic Background Overlay */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-purple-900 via-cyan-900 to-pink-900" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ff00ff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
                        Ready to build something extraordinary? Drop me a message or connect directly.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                    {/* Left: Direct Connections */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400">Reach Out Directly</h3>

                        {/* Phone */}
                        <motion.a
                            href="tel:+23407019577768"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                            className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-purple-500/30 hover:border-cyan-400/60 transition group"
                        >
                            <img src="https://www.shutterstock.com/image-illustration/neon-telephone-call-icon-isolated-260nw-2414455923.jpg" alt="Neon Phone Icon" className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg flex-shrink-0" />
                            <div className="text-center sm:text-left">
                                <p className="text-gray-400 text-sm">Phone</p>
                                <p className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-300 transition">+234 07019577768</p>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href="mailto:oluwapelumifelix621@gmail.com"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                            className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-purple-500/30 hover:border-cyan-400/60 transition group"
                        >
                            <img src="https://images.stockcake.com/public/5/4/c/54c7020a-d259-4128-863c-ae2cdb018f3f_large/futuristic-email-icon-stockcake.jpg" alt="Neon Email Icon" className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg flex-shrink-0" />
                            <div className="text-center sm:text-left">
                                <p className="text-gray-400 text-sm">Email</p>
                                <p className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-300 transition">oluwapelumifelix621@gmail.com</p>
                            </div>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            href="https://www.linkedin.com/in/felix-oluwapelumi-abb539367/"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                            className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-purple-500/30 hover:border-cyan-400/60 transition group"
                        >
                            <img src="https://www.shutterstock.com/image-illustration/image-features-neon-linkedin-logo-260nw-2640554547.jpg" alt="Neon LinkedIn Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg flex-shrink-0" />
                            <div className="text-center sm:text-left">
                                <p className="text-gray-400 text-sm">LinkedIn</p>
                                <p className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-300 transition">/in/FelixOluwapelumi</p>
                            </div>
                        </motion.a>

                        {/* GitHub */}
                        <motion.a
                            href="https://github.com/Oluwapelumifelix001"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                            className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-purple-500/30 hover:border-cyan-400/60 transition group"
                        >
                            <img src="https://i.etsystatic.com/16971612/r/il/67832c/5599341621/il_340x270.5599341621_2q8p.jpg" alt="Neon GitHub Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg flex-shrink-0" />
                            <div className="text-center sm:text-left">
                                <p className="text-gray-400 text-sm">GitHub</p>
                                <p className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-300 transition">github.com/Oluwapelumifelix001</p>
                            </div>
                        </motion.a>
                    </motion.div>


                    <motion.form
                        variants={itemVariants}
                        onSubmit={handleSubmit}
                        className="p-8 sm:p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-purple-500/40 shadow-2xl shadow-cyan-500/20 space-y-6"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-5 py-3 bg-white/10 border border-purple-500/50 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition"
                                placeholder="Alade Felix"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-5 py-3 bg-white/10 border border-purple-500/50 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                className="w-full px-5 py-3 bg-white/10 border border-purple-500/50 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition resize-none"
                                placeholder="Tell me about your project, idea, or opportunity..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === 'submitting'}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-4 text-xl font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-cyan-500/50 transition disabled:opacity-70"
                        >
                            {status === 'submitting' ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                        </motion.button>

                        {status === 'success' && (
                            <p className="text-green-400 text-center font-semibold animate-pulse">WhatsApp opened! Your message is ready to send.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-center font-semibold">Please fill all fields correctly.</p>
                        )}
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="about" style={{ minHeight: 'auto', paddingTop: '100px' }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInUp}
                >
                    <h2 className="section-title">About Me</h2>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            maxWidth: '1000px',
                            margin: '0 auto',
                        }}
                    >
                        {/* Main Bio Card */}
                        <motion.div
                            className="glass-card"
                            whileHover={{ scale: 1.02 }}
                            style={{
                                gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: 'rgba(248, 250, 252, 0.9)',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                I'm a <strong style={{ color: 'var(--color-accent-violet)' }}>Computer Science and Psychology</strong> dual major
                                with a deep fascination for understanding both how machines learn and how humans think.
                                This unique combination allows me to build AI systems that are not just powerful, but truly
                                <strong style={{ color: 'var(--color-accent-violet)' }}> human-centered</strong> and aligned with human values.
                            </p>
                            <p
                                style={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: 'rgba(248, 250, 252, 0.9)',
                                }}
                            >
                                Currently researching <strong style={{ color: 'var(--color-cosmic-blue)' }}>optimal transport in LLMs</strong> and
                                cross-model steering vectors. Beyond AI research, I'm captivated by space exploration and
                                the infinite possibilities it represents. Whether I'm training neural networks,
                                analyzing activation patterns, or dreaming about the cosmos, I'm driven by curiosity and
                                the desire to push the boundaries of what's possible.
                            </p>
                        </motion.div>

                        {/* Interest Cards */}
                        {[
                            {
                                icon: '💻',
                                title: 'Computer Science',
                                description: 'Building scalable systems, cloud infrastructure, and innovative software solutions',
                            },
                            {
                                icon: '🧠',
                                title: 'Psychology',
                                description: 'Understanding human behavior to create intuitive, user-centered experiences',
                            },
                            {
                                icon: '🚀',
                                title: 'Space Exploration',
                                description: 'Fascinated by the cosmos and the technology that helps us explore it',
                            },
                        ].map((interest, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '3rem',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    {interest.icon}
                                </div>
                                <h3
                                    style={{
                                        marginBottom: '0.5rem',
                                        fontSize: '1.3rem',
                                    }}
                                >
                                    {interest.title}
                                </h3>
                                <p
                                    style={{
                                        color: 'rgba(248, 250, 252, 0.7)',
                                        fontSize: '0.95rem',
                                    }}
                                >
                                    {interest.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

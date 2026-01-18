import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                paddingTop: '80px',
            }}
        >
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--color-accent-violet)',
                            marginBottom: '1rem',
                            fontWeight: 500,
                        }}
                    >
                        Hi, I'm
                    </motion.p>

                    {/* Name */}
                    <h1
                        style={{
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                        }}
                    >
                        Shashwat Murawala
                    </h1>

                    {/* Animated Tagline */}
                    <h2
                        style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            color: 'var(--color-star-glow)',
                            marginBottom: '2rem',
                            minHeight: '80px',
                        }}
                    >
                        <Typewriter
                            words={[
                                'ML Researcher',
                                'Software Engineer',
                                'CS & Psychology Major',
                                'Space Enthusiast',
                                'AI Enthusiast',
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto 3rem',
                            color: 'rgba(248, 250, 252, 0.8)',
                            lineHeight: 1.8,
                        }}
                    >
                        Passionate about advancing AI and machine learning at the intersection of
                        technology and human behavior. From optimal transport in LLMs to launching rockets,
                        I love exploring the cosmos of possibilities.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        <a href="#experience" className="btn-primary">
                            View Experience
                        </a>
                        <a
                            href="#contact"
                            className="btn-primary"
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--color-cosmic-purple)',
                            }}
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                    {/* Floating Scroll Indicator */}
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        style={{
                            marginTop: '5rem',
                            display: 'inline-block',
                        }}
                    >
                        <div
                            style={{
                                width: '30px',
                                height: '50px',
                                border: '2px solid var(--color-accent-violet)',
                                borderRadius: '25px',
                                position: 'relative',
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    width: '6px',
                                    height: '6px',
                                    background: 'var(--color-accent-violet)',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: '50%',
                                    top: '10px',
                                    transform: 'translateX(-50%)',
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
                className="animate-float"
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                }}
            />
            <motion.div
                className="animate-float"
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animationDelay: '1s',
                }}
            />
        </section>
    );
};

export default Hero;

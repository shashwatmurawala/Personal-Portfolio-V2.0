import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navigation: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: scrolled
                    ? 'rgba(10, 14, 39, 0.9)'
                    : 'rgba(10, 14, 39, 0.5)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
            }}
        >
            <div className="container" style={{ padding: '1rem 2rem' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            cursor: 'pointer',
                        }}
                    >
                        SM
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div
                        className="nav-links"
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem', alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    style={{
                                        position: 'relative',
                                        color: 'var(--color-star-white)',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        transition: 'var(--transition-smooth)',
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {/* Resume Button */}
                            <a
                                href="/ShashwatMurawala_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: '0.5rem 1.2rem',
                                    background: 'var(--gradient-cosmic)',
                                    border: 'none',
                                    borderRadius: '25px',
                                    color: 'white',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    transition: 'var(--transition-smooth)',
                                    fontSize: '0.9rem',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 58, 237, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                📄 Resume
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                display: window.innerWidth <= 768 ? 'block' : 'none',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                            }}
                            aria-label="Toggle mobile menu"
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginTop: '1rem',
                            padding: '1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '0.5rem',
                        }}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: 'var(--color-star-white)',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navigation;

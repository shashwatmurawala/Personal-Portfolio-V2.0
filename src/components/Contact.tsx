import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'smurawal@uwaterloo.ca',
      link: 'mailto:smurawal@uwaterloo.ca',
      color: '#ec4899',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Shashwat Murawala',
      link: 'https://www.linkedin.com/in/shashwatmurawala',
      color: '#0077b5',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: '@shashwatmurawala',
      link: 'https://github.com/shashwatmurawala',
      color: '#a78bfa',
    },
  ];

  return (
    <section
      id="contact"
      style={{
        minHeight: 'auto',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <motion.div
            className="glass-card"
            style={{
              maxWidth: '700px',
              margin: '0 auto 3rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'rgba(248, 250, 252, 0.9)',
                marginBottom: '2rem',
              }}
            >
              I'm always open to new opportunities, collaborations, and interesting conversations.
              Whether you want to discuss space exploration, AI research, machine learning projects,
              or potential collaborations, feel free to reach out!
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 15px 50px ${method.color}33`,
                }}
                style={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    color: method.color,
                    marginBottom: '1rem',
                  }}
                >
                  {method.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {method.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(248, 250, 252, 0.7)',
                    fontSize: '0.95rem',
                    wordBreak: 'break-word',
                  }}
                >
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              marginTop: '5rem',
              textAlign: 'center',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <p
              style={{
                color: 'rgba(248, 250, 252, 0.6)',
                fontSize: '0.9rem',
              }}
            >
              © {new Date().getFullYear()} Shashwat Murawala. Crafted with 💜 and a love for the cosmos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

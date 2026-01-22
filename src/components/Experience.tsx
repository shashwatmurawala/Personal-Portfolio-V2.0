import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Machine Learning Researcher',
      company: 'Algoverse AI Research',
      location: 'California, United States',
      period: 'Sept. 2025 – Present',
      achievements: [
        'Researching optimal transport methods for cross-model steering vector transfer in large language models, with results aimed for submission to EACL SRW 2025, ICLR 2026, ACL 2026 and ICML 2026.',
        'Investigating affine and nonlinear activation alignment mappings between open LLMs (Gemma, Qwen, Mistral, Llama) using 2-Wasserstein distance and Sinkhorn-regularized optimal-transport objectives.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Rocket Lab',
      location: 'Auckland, New Zealand',
      period: 'May 2025 – Aug. 2025',
      achievements: [
        'Designed and implemented an active pinging system integrated with a four-level Grafana dashboard, using Prometheus to monitor real-time infrastructure availability and automatically flag outages for instant detection.',
        'Contributed to the development of a custom serialization package and optimized its encoder and decoder, reducing per-operation time by 25% and 80% respectively.',
        'Contributed to the development of a high-performance internal messaging and streaming service, achieving 80% faster throughput compared to NATS for internal use cases.',
        'Developed and implemented a C# WPF desktop application for real-time data visualization and animated overlays, used in Rocket Lab\'s YouTube livestreams during launches to display data and key milestones.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Dayforce',
      location: 'Toronto, Ontario',
      period: 'May 2024 – Dec. 2024',
      achievements: [
        'Developed and implemented end-to-end integration testing for the Hyperscale Next-Gen application, ensuring reliability, identifying critical bugs early, and reducing QA cycles by 20%.',
        'Supported and contributed to the development of a Kafka-based system as part of the Hyperscale project, which increased data processing capacity by 60% and reduced processing time by 40%.',
        'Remediated 250+ security vulnerabilities identified by Veracode and SonarQube, ensuring compliance with industry standards and improving application security and code quality by 35%.',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'JANA Corporation',
      location: 'Aurora, Ontario',
      period: 'May 2023 – Aug. 2023',
      achievements: [
        'Developed a tool in Python, resulting in a 40% reduction in manual data processing efforts.',
        'Conducted in-depth data analysis for SIMP-CRA Model resulting in a 25% increase in data retrieval and processing speed, leveraging Python and SQL.',
        'Automated ETL processes for MidAmerican TIMP, reducing data processing time by approximately 30% and improving overall efficiency.',
      ],
    },
  ];

  return (
    <section id="experience" style={{ minHeight: 'auto', paddingTop: '100px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  mass: 0.5
                }}
              >
                <div className="timeline-dot" />
                <div className="glass-card">
                  <div
                    style={{
                      marginBottom: '1rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        fontStyle: 'italic',
                        color: 'var(--color-star-glow)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {exp.company}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: window.innerWidth > 768 && index % 2 === 0 ? 'flex-end' : 'flex-start',
                        gap: '1rem',
                        fontSize: '0.9rem',
                        color: 'rgba(248, 250, 252, 0.6)',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span>📍 {exp.location}</span>
                      <span>📅 {exp.period}</span>
                    </div>
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                    }}
                  >
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: '0.75rem',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          color: 'rgba(248, 250, 252, 0.8)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--color-accent-violet)',
                          }}
                        >
                          •
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

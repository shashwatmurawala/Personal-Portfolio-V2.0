import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Go', 'C++', 'C#', 'C', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'PromQL', 'LogQL', 'LINQ'],
    },
    {
      title: 'ML & AI Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'pandas', 'NumPy', 'OpenCV', 'scikit-learn'],
    },
    {
      title: 'Web Frameworks & Libraries',
      skills: ['React', 'Angular', 'Express', 'Flask', 'WPF', 'jQuery', 'Bootstrap'],
    },
    {
      title: 'DevOps Tools',
      skills: ['Grafana', 'Kubernetes', 'ArgoCD', 'TeamCity', 'Docker', 'Apache Kafka', 'Jenkins', 'Terraform'],
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'IntelliJ IDEA', 'Postman', 'MongoDB Compass', 'Jupyter Notebook', 'SwaggerUI', 'Veracode'],
    },
  ];

  return (
    <section id="skills" style={{ minHeight: 'auto', paddingTop: '100px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3
                  style={{
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                    fontSize: '1.3rem',
                  }}
                >
                  {category.title}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="skill-badge"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              marginTop: '3rem',
              textAlign: 'center',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(248, 250, 252, 0.8)',
                lineHeight: 1.8,
              }}
            >
              I'm passionate about <strong style={{ color: 'var(--color-accent-violet)' }}>AI and Machine Learning</strong>,
              constantly exploring cutting-edge research in LLMs and optimal transport. My dual background
              in <strong style={{ color: 'var(--color-accent-violet)' }}>Computer Science and Psychology</strong> gives
              me a unique perspective on building intelligent systems that understand human behavior.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

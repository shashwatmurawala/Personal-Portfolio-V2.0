import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      title: 'RouteMaster',
      description: 'RouteMaster is a website which helps students make a plan based on their major and preferences of minors and specializations.',
      githubUrl: 'https://github.com/shashwatmurawala/RouteMaster',
      tags: ['Web Development', 'Education', 'Planning'],
    },
    {
      title: 'Drowsiness Detector',
      description: 'An application which detects drowsiness amongst drivers and alerts them to move over to the side to rest.',
      githubUrl: 'https://github.com/shashwatmurawala/DrowsinessDetection',
      tags: ['Computer Vision', 'OpenCV', 'Safety'],
    },
    {
      title: 'MHR Bot',
      description: 'Created a mental health chat bot which asks you 10 questions and gives you mental health resources based on your university, location, and needs.',
      githubUrl: 'https://github.com/shashwatmurawala/MHR-Bot',
      tags: ['AI', 'Mental Health', 'Chatbot'],
    },
    {
      title: 'Ambulert',
      description: 'An app that warns citizens of an incoming ambulance before it passes to give them enough time to move aside.',
      githubUrl: 'https://github.com/shashwatmurawala/Ambulert',
      tags: ['Mobile App', 'Emergency', 'IoT'],
    },
    {
      title: 'Food Avalanche',
      description: 'A web application which connects restaurants with the homeless so at the end of the day the homeless can pick up any leftover food.',
      githubUrl: 'https://github.com/shashwatmurawala/Food-Avalanche',
      tags: ['Social Impact', 'Web App', 'Community'],
    },
    {
      title: 'Sudoku Solver',
      description: 'Made a python program which takes in an image and outputs the image with the solved sudoku numbers on the image.',
      githubUrl: 'https://github.com/shashwatmurawala/Sudoku-Solver',
      tags: ['Computer Vision', 'Python', 'Algorithms'],
    },
    {
      title: 'Foodar',
      description: 'Worked with a team to create a web application to give the user the closest 3 restaurants based on their location.',
      githubUrl: 'https://github.com/shashwatmurawala/Foodar',
      tags: ['Geolocation', 'Web App', 'Team Project'],
    },
    {
      title: 'Gender and Age Detection',
      description: 'Created a program which takes in an image and predicts the gender and age of the person in the image based on a dataset of more than 100,000.',
      githubUrl: 'https://github.com/shashwatmurawala/Gender-and-Age-Detection',
      tags: ['Machine Learning', 'Computer Vision', 'Dataset'],
    },
    {
      title: 'Text to Speech',
      description: 'I created a python application which allows a user to type any text which it then converts into speech.',
      githubUrl: 'https://github.com/shashwatmurawala/Text-to-Speech',
      tags: ['Python', 'NLP', 'Audio'],
    },
  ];

  return (
    <section id="projects" style={{ minHeight: 'auto', paddingTop: '100px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '280px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      marginBottom: '1rem',
                      color: 'var(--color-accent-violet)',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: 'rgba(248, 250, 252, 0.8)',
                      marginBottom: '1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.8rem',
                          padding: '0.3rem 0.8rem',
                          background: 'rgba(167, 139, 250, 0.2)',
                          border: '1px solid rgba(167, 139, 250, 0.3)',
                          borderRadius: '12px',
                          color: 'var(--color-accent-violet)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-star-glow)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent-violet)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-star-glow)';
                  }}
                >
                  <FaGithub size={20} />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
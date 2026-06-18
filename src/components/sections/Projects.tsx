'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Eye } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'AI Chat Assistant',
    description: 'Full-stack conversational AI application with real-time streaming, context management, and voice input support.',
    image: '🤖',
    technologies: ['React', 'Node.js', 'OpenAI API', 'WebSocket', 'MongoDB'],
    github: 'https://github.com/YarisHaris/ai-chat-assistant',
    live: '#',
    highlights: [
      'Real-time message streaming with WebSocket',
      'Context-aware conversations',
      'Voice-to-text integration',
    ],
  },
  {
    title: 'IoT Home Automation',
    description: 'Smart home control system with real-time monitoring, device management, and automated scheduling using IoT sensors.',
    image: '🏠',
    technologies: ['Arduino', 'Python', 'MQTT', 'React', 'Firebase'],
    github: 'https://github.com/YarisHaris/iot-home-automation',
    live: '#',
    highlights: [
      '50+ device management',
      'Real-time MQTT communication',
      'Automated scheduling & alerts',
    ],
  },
  {
    title: 'ML Image Recognition',
    description: 'Deep learning model for image classification with 94% accuracy. Includes data pipeline, model training, and Flask deployment.',
    image: '📸',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'SQLite'],
    github: 'https://github.com/YarisHaris/ml-image-recognition',
    live: '#',
    highlights: [
      '94% classification accuracy',
      'Processes 1M+ images',
      'Real-time inference API',
    ],
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management platform with real-time updates, user authentication, and team workspace management.',
    image: '✓',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
    github: 'https://github.com/YarisHaris/task-manager',
    live: '#',
    highlights: [
      'Real-time collaboration',
      'User authentication & teams',
      'Responsive design',
    ],
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard for real-time data visualization and business intelligence with multiple chart types.',
    image: '📊',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Material-UI'],
    github: 'https://github.com/YarisHaris/data-viz-dashboard',
    live: '#',
    highlights: [
      'Real-time data updates',
      'Custom chart library',
      'Export to PDF/CSV',
    ],
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with payment integration, inventory management, and customer dashboard.',
    image: '🛒',
    technologies: ['React', 'Node.js', 'Stripe API', 'MongoDB', 'JWT Auth'],
    github: 'https://github.com/YarisHaris/ecommerce-platform',
    live: '#',
    highlights: [
      'Payment processing with Stripe',
      'Inventory management',
      'Admin dashboard',
    ],
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className="relative w-full py-20 bg-dark-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-space text-text-primary mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary-blue" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-dark-card border border-primary-blue/30 rounded-lg overflow-hidden h-full flex flex-col hover:border-primary-blue transition-all">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-blue/10 to-secondary-blue/10 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-7xl"
                  >
                    {project.image}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold font-space text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm font-inter mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-xs text-accent-light"
                      >
                        <div className="w-1.5 h-1.5 bg-accent-light rounded-full" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-primary-blue/10 border border-primary-blue/30 rounded text-primary-blue font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-text-secondary font-inter">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-bg border border-primary-blue/50 text-primary-blue rounded hover:bg-primary-blue/10 transition-all font-inter text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-blue text-text-primary rounded hover:bg-secondary-blue transition-all font-inter text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      Live
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

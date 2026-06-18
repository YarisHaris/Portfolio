'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'TechStartup',
    location: 'Remote',
    duration: 'Jun 2023 - Aug 2023',
    description: [
      'Developed full-stack web applications using React and Node.js',
      'Designed and optimized MongoDB databases for 10K+ user base',
      'Implemented REST APIs with Express.js handling 500+ requests/day',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    role: 'AI/ML Developer Intern',
    company: 'DataScience Inc',
    location: 'Bangalore',
    duration: 'Jan 2023 - May 2023',
    description: [
      'Built and trained neural networks for image classification (94% accuracy)',
      'Deployed ML models using TensorFlow and Flask',
      'Created data pipelines processing 1M+ records',
    ],
    technologies: ['Python', 'TensorFlow', 'Flask', 'SQL'],
  },
  {
    role: 'IoT Developer Intern',
    company: 'EmbedTech Solutions',
    location: 'Pune',
    duration: 'Jul 2022 - Dec 2022',
    description: [
      'Developed IoT applications using Arduino and Raspberry Pi',
      'Integrated MQTT protocols for real-time data transmission',
      'Built monitoring dashboards for 50+ IoT devices',
    ],
    technologies: ['Arduino', 'Python', 'MQTT', 'IoT'],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary-blue" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                x: 10,
                boxShadow: '0 0 30px rgba(37, 99, 235, 0.2)',
              }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue/20 to-secondary-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-dark-card border border-primary-blue/20 rounded-lg p-8 hover:border-primary-blue/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-space text-text-primary mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-primary-blue font-inter font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <Briefcase className="w-8 h-8 text-accent-light" />
                  </motion.div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-text-secondary font-inter">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary-blue" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-blue" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 space-y-2">
                  {exp.description.map((desc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <ArrowRight className="w-4 h-4 text-primary-blue mt-1 flex-shrink-0" />
                      <p className="text-text-secondary font-inter">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary-blue/10 border border-primary-blue/30 rounded-full text-xs font-inter text-primary-blue hover:border-primary-blue transition-all cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

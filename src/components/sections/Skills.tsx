'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Brain,
  Zap,
  Cpu,
  Settings,
  Cloud,
  Layers,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
  },
  {
    icon: Layers,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    icon: Database,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'MongoDB', 'Firebase', 'PostgreSQL'],
  },
  {
    icon: Brain,
    title: 'AI/ML',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Neural Networks'],
  },
  {
    icon: Cpu,
    title: 'IoT & Hardware',
    skills: ['Arduino', 'Raspberry Pi', 'MQTT', 'Sensors', 'Microcontrollers'],
  },
  {
    icon: Cloud,
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'AWS', 'APIs', 'REST', 'Postman'],
  },
];

export default function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative w-full py-20 bg-dark-bg overflow-hidden">
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
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-primary-blue" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)',
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur" />
                <div className="relative bg-dark-card border border-primary-blue/30 rounded-lg p-6 hover:border-primary-blue transition-all">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="mb-4"
                  >
                    <Icon className="w-10 h-10 text-primary-blue" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-space text-text-primary mb-4">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-primary-blue rounded-full" />
                        <span className="text-text-secondary font-inter">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

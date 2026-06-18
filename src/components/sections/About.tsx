'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Brain, Zap } from 'lucide-react';

const stats = [
  { label: '3+ Internships', value: '3+' },
  { label: '5+ Projects', value: '5+' },
  { label: '4 Domains', value: '4' },
];

const skills = [
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Firebase', category: 'Tools' },
];

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary-blue" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-64 h-64 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-accent-light/20 rounded-lg" />
              <div className="absolute inset-0 border border-primary-blue/50 rounded-lg" />
              <div className="absolute inset-4 border border-primary-blue/30 rounded-lg" />
              <div className="w-full h-full flex items-center justify-center">
                <Code2 className="w-32 h-32 text-primary-blue/40" />
              </div>
              {/* Glowing ring animation */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(37, 99, 235, 0.3)',
                    '0 0 40px rgba(37, 99, 235, 0.6)',
                    '0 0 20px rgba(37, 99, 235, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right: Bio & Stats */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed mb-8 font-inter"
            >
              Full-stack developer with hands-on experience across the entire spectrum — frontend
              interfaces, backend APIs, AI/ML systems, and IoT-based applications. Currently pursuing
              B.E. in AI & ML at BLDEA's VP Dr. PG Halakatti College of Engineering and Technology
              (CGPA: 7.33/10). I like starting projects from scratch, building things that actually
              work, and solving problems across whatever layer they live in — whether that's a pixel
              on screen, a database query, an ML model, or a sensor on a circuit board.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-dark-card border border-primary-blue/20 rounded-lg p-4 text-center hover:border-primary-blue/50 transition-all"
                >
                  <div className="text-2xl font-bold font-space text-primary-blue mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-text-secondary font-inter">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skill Badges */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-dark-card border border-primary-blue/30 rounded-full hover:border-primary-blue hover:shadow-neon-blue transition-all cursor-pointer"
                >
                  <span className="text-sm font-inter text-text-secondary">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

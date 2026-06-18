'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'Backend Engineer',
  'AI/ML Enthusiast',
  'IoT Developer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.substring(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-dark-bg overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 via-transparent to-transparent" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col items-center justify-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-accent-light mb-4 font-inter tracking-widest uppercase text-sm"
          >
            Welcome to my digital space
          </motion.p>

          {/* Name with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mb-6"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-space text-text-primary mb-2 drop-shadow-lg">
              Yaris Nadaf
            </h1>
            {/* Glitch effect simulation with animation */}
            <motion.div
              animate={{
                textShadow: [
                  '0 0 0px rgba(37, 99, 235, 0)',
                  '0 0 10px rgba(37, 99, 235, 0.5)',
                  '0 0 0px rgba(37, 99, 235, 0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 text-6xl sm:text-7xl lg:text-8xl font-bold font-space text-primary-blue blur-sm pointer-events-none"
            >
              Yaris Nadaf
            </motion.div>
          </motion.div>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-space text-primary-blue mb-8 h-16 flex items-center justify-center"
          >
            <span>{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-2"
            >
              |
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-text-secondary max-w-2xl mx-auto mb-8 font-inter text-lg"
          >
            B.E. Student in AI & ML • Building full-stack solutions across web, AI, and IoT
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 99, 235, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary-blue text-text-primary font-inter font-semibold rounded-lg hover:bg-secondary-blue transition-all"
            >
              View My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-8 py-3 border border-primary-blue text-primary-blue font-inter font-semibold rounded-lg hover:bg-primary-blue/10 transition-all"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-6 justify-center mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/YarisHaris"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card rounded-lg border border-primary-blue/30 hover:border-primary-blue hover:shadow-neon-blue transition-all"
            >
              <Github className="w-6 h-6 text-primary-blue" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://linkedin.com/in/yaris-nadaf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-card rounded-lg border border-primary-blue/30 hover:border-primary-blue hover:shadow-neon-blue transition-all"
            >
              <Linkedin className="w-6 h-6 text-primary-blue" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:yarisanadaf@gmail.com"
              className="p-3 bg-dark-card rounded-lg border border-primary-blue/30 hover:border-primary-blue hover:shadow-neon-blue transition-all"
            >
              <Mail className="w-6 h-6 text-primary-blue" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-primary-blue" />
        </motion.div>
      </div>
    </section>
  );
}

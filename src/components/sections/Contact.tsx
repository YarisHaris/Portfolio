'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yarisanadaf@gmail.com',
    link: 'mailto:yarisanadaf@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9876543210',
    link: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Karnataka, India',
    link: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

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
      id="contact"
      className="relative w-full py-20 bg-dark-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-space text-text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto font-inter">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          <div className="h-1 w-20 bg-primary-blue mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="group flex items-start gap-4 p-6 bg-dark-card border border-primary-blue/20 rounded-lg hover:border-primary-blue/50 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="p-3 bg-primary-blue/10 rounded-lg"
                  >
                    <Icon className="w-6 h-6 text-primary-blue" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold font-space text-text-primary mb-1">
                      {info.label}
                    </h3>
                    <p className="text-text-secondary font-inter group-hover:text-primary-blue transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm font-inter text-text-secondary mb-2">
                Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-primary-blue/30 rounded-lg focus:border-primary-blue focus:outline-none transition-all font-inter text-text-primary placeholder-text-secondary/50"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-inter text-text-secondary mb-2">
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-primary-blue/30 rounded-lg focus:border-primary-blue focus:outline-none transition-all font-inter text-text-primary placeholder-text-secondary/50"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-inter text-text-secondary mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-card border border-primary-blue/30 rounded-lg focus:border-primary-blue focus:outline-none transition-all font-inter text-text-primary placeholder-text-secondary/50 resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 99, 235, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading || submitted}
              className="w-full px-8 py-3 bg-primary-blue text-text-primary font-inter font-semibold rounded-lg hover:bg-secondary-blue transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                'Message Sent! ✓'
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

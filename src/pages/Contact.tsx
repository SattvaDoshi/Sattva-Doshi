import React, { useState } from 'react';
import { Phone, Mail, CheckIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
       await fetch('https://sattva-doshi.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out! I'll get back to you within 24 hours.",
        });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 80 800 40 672',
      description: 'Mon-Fri 9am-6pm IST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'sattva103@gmail.com',
      description: 'I respond within 24 hours',
    },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solutions',
    'SEO Services',
    'Consulting',
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="glass-card glass-card-hover p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us A Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-glow ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-up">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="glass-card glass-card-hover p-6 flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue">
                          <info.icon className="h-6 w-6 text-dark-bg" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                          <p className="text-neon-cyan mb-1">{info.details}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
                  <div className="glass-card glass-card-hover p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <CheckIcon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <div className="glass-card glass-card-hover p-6">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                        5+ years of experience
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                        100+ successful projects
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                        24/7 support available
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                        Competitive pricing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity, but most websites take 4-8 weeks from start to finish."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various support packages including maintenance, updates, and technical assistance."
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile approach: discovery, design, development, testing, and deployment with regular client updates."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise-level companies."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card glass-card-hover p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

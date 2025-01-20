"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pages = [
  {
    id: 'about',
    title: 'About Me',
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
          Hi, I'm Apoorva Chavali
        </h2>
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
        I am currently pursuing a master’s degree (2024 - 2026) in computer engineering with a specialization in software and machine intelligence at Virginia Tech.

I completed my undergraduate studies in computer science and engineering in 2023 from Osmania University, where I developed a deep interest in artificial intelligence, inspired by its transformative advancements. This passion for AI and my desire to contribute meaningfully to the field motivated me to pursue advanced studies and explore innovative opportunities in AI and machine learning.

        </p>
      </div>
    ),
  },
  {
    id: 'skills',
    title: 'Skills',
    content: (
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Programming Languages',
            skills: ['Python', 'Java', 'C++', 'C','C#', 'SQL'],
          },
          {
            title: 'Full Stack Development',
            skills: ['Django', 'Flask', 'React', 'Javascript'],
          },
          
          {
            title: 'Machine Learning',
            skills: ['TensorFlow', 'Numpy', 'Data Visualization', 'Neural networks'],
          },
        ].map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-100">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-gray-800 text-teal-400 px-4 py-2 rounded-full text-sm border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'projects',
    title: 'Projects',
    content: (
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Non linear time series prediction',
            description: 'Analysis and prediction of Lorenz attractor using VAE',
            technologies: ['Pytorch', 'numpy', 'chaotic systems'],
            link: 'https://github.com/apoorva-chavali/Non-linear-time-series-data', 
          },
          {
            title: 'Image caption generator',
            description: 'A machine learning model that produces accurate captions for an image',
            technologies: ['Tensorflow', 'Resnet50', 'Glove embeddings'],
            link: 'https://github.com/apoorva-chavali/image-caption-generator', 
          },
          {
            title: 'Text Summarization',
            description: 'Condenses a document and returns the most important information',
            technologies: ['Tensorflow', 'NLP', 'pandas'],
            link: 'https://github.com/apoorva-chavali/Text-summarization',
          },
          {
            title: 'Voicely',
            description: 'An automated text to speech prescription system for doctors',
            technologies: ['PHP', 'TTS', 'MySQL'],
            link: 'https://github.com/apoorva-chavali/voicely',
          },
          {
            title: 'Plant disease detection',
            description: 'Identifies the disease of a plant and provides organic solutions',
            technologies: ['VGG16', 'Flask', 'MySQL'],
            link: 'https://github.com/apoorva-chavali/Plant-disease-detection',
          },
          {
            title: 'Do it',
            description: 'A productivity discord bot',
            technologies: ['Discord', 'Python', 'Asynchronous programming'],
            link: 'https://github.com/apoorva-chavali/Do-it',
          }
        ].map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-900 text-teal-400 px-3 py-1 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-teal-500 text-black font-medium rounded-full hover:bg-teal-600 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    ),
    
  },
  {
    id: 'experience',
    title: 'Experience',
    content: (
      <div className="space-y-8">
        {[
          {
            role: 'MLOps Engineer',
            company: 'International Institute of Information Technology, Hyderabad (CVIT Lab)',
            duration: 'July 2023 - May 2024',
            description: 'I curated a dataset that includes different OCR modalities using various digital image processing techniques. I worked on a classification problem to categorize these modalities. I deployed my work as an API, which is currently being used in an app called Bhashini, which has over 1M+ downloads on the Play Store.',
          },
          {
            role: 'Engineering Intern',
            company: 'Ivanti',
            duration: 'Jan 2023 - July 2023',
            description: 'I resolved multiple bugs to improve product performance. Additionally, I developed a regression tool that provides weekly status updates on nearly 300 APIs to stakeholders. I also created a command-line tool that extracts APIs from Postman and executes multiple APIs across different subcategories with a single command.',
          },
          
        ].map((experience, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-gray-100">{experience.role}</h3>
            <p className="text-gray-400">{experience.company} | {experience.duration}</p>
            <p className="text-gray-400 mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Me',
    content: (
      <form
        className="space-y-6 max-w-lg mx-auto"
        action="https://formspree.io/f/xqaardkv" 
        method="POST"
      >
        <input
          type="text"
          name="name" 
          placeholder="Your Name"
          className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 transition-all duration-300 text-gray-100 placeholder-gray-500"
          required
        />
        <input
          type="email"
          name="email" 
          placeholder="Your Email"
          className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 transition-all duration-300 text-gray-100 placeholder-gray-500"
          required
        />
        <textarea
          name="message" 
          placeholder="Your Message"
          rows={4}
          className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 transition-all duration-300 text-gray-100 placeholder-gray-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-black font-medium py-4 rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    ),
    
  },
];

const BookThemedPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={pages[currentPage].id}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl p-8 bg-gray-800 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            {pages[currentPage].title}
          </h2>
          {pages[currentPage].content}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center items-center w-full max-w-4xl mt-8 space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50"
        >
          Previous
        </button>

        {/* Bookmark Navigation */}
        <div className="flex space-x-2">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => goToPage(index)}
              className={`w-8 h-8 rounded-full border-2 ${
                currentPage === index
                  ? 'bg-teal-500 border-teal-500'
                  : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
              } transition-all duration-300`}
            >
              <span className="sr-only">{page.title}</span>
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="px-6 py-3 bg-teal-500 text-black rounded-lg hover:bg-teal-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookThemedPortfolio;
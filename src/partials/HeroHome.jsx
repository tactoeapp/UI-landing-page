import React, { useState } from 'react';
import { ArrowRight, Sun, Moon } from 'lucide-react';

// Assuming you have these images in your project
import KanbanLightImage from '../images/heroLight.png';
import KanbanDarkImage from '../images/heroDark.png';

const HeroHome = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://tactoemailcampaign.onrender.com/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitMessage("Thanks for subscribing! We'll keep you updated on our Early Adopter Program.");
        setEmail('');
      } else {
        const error = await response.json();
        setSubmitMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`relative overflow-hidden bg-gray-900 text-white transition-colors duration-300`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-20 pb-12 md:pt-32 md:pb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side: Content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
          
              
              <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-6">
                Simplify Your{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Workflow
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
                Tactoe: Your AI-powered project management buddy. Effortlessly manage tasks, boost productivity, and keep projects in check.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-white bg-primary hover:bg-accent rounded-md transition duration-300 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Early Access'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
              
              {submitMessage && (
                <p className={`text-sm ${submitMessage.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                  {submitMessage}
                </p>
              )}

              <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
                Our MVP is launching in January 2025!
              </p>
            </div>

            {/* Right side: Hero Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <button
                  onClick={toggleDarkMode}
                  className={`absolute top-4 right-4 p-2 rounded-full z-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}
                >
                  {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>

                <img
                  src={isDarkMode ? KanbanDarkImage : KanbanLightImage}
                  alt="Tactoe Product"
                  className="w-full h-auto rounded-lg shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={openModal}
                />
                
                <div className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-md text-sm flex items-center shadow-md">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  First look: Complete Kanban experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-screen-xl max-h-screen-90 overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={isDarkMode ? KanbanDarkImage : KanbanLightImage}
              alt="Tactoe Product Full Size"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroHome;
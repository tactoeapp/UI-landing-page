import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Mail, Quote } from 'lucide-react'; // Import Lucide icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faReddit, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import Font Awesome icons
import { Link } from 'react-router-dom';
import Adith from '../images/adith.jpeg';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md border border-primary-200"
    whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Icon className="w-10 h-10 text-primary-600 mb-4" />
    <h2 className="text-1xl md:text-1xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{title}</h2>
    <p className="text-primary-600">{description}</p>
  </motion.div>
);

const CommunityLink = ({ icon, platform, link, bgColor, textColor }) => (
  <a
    href={link}
    className={`flex items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${bgColor} ${textColor}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={icon} className="w-6 h-6 mr-2" />
    <span className="font-medium">{platform}</span>
  </a>
);

const AboutUs = () => {
  return (
    <section className="py-16 bg-white-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-shrink-0 mr-4 pb-12 flex text-center items-center justify-center">
            {/* Logo */}
            <Link to="/" className="block" aria-label="tactoe">
              <svg className="w-10 h-10 animate-spin-slow" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#00a686" offset="0%" />
                    <stop stopColor="#FFFFFF" offset="10.871%" />
                    <stop stopColor="#00B8D6" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>
          </div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            tactoe: where project management meets the 21st century with AI smarts and a dash of personality. Tailored for freelancers and small businesses, we promise not to turn your life into a confusing spreadsheet. Whether you’re setting up your first project or managing a dozen, tactoe is here to make it feel like a walk in the park.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={Rocket}
            title="Our Mission"
            description="Our mission is clear: to free you from the monotony of project management with tools that genuinely make your life easier. Think of us as your friendly partner in achieving productivity and success."
          />
          <FeatureCard
            icon={Users}
            title="Our Team"
            description="We’re a bunch of tech geeks and creative minds who somehow managed to work together long enough to create something amazing. When we’re not arguing over the best coding languages or coffee brands, we’re building tools that rock."
          />
          <FeatureCard
            icon={Mail}
            title="Get in Touch"
            description="Have a question, a suggestion, or just want to chat about your favorite AI conspiracy theories? Drop us a line! We’re all ears (and maybe a little bit of sarcasm)."
          />
        </div>

        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-xl p-8 md:p-12 bg-[#e0f7fa]">
            <Quote className="w-16 h-16 text-black opacity-20 absolute top-4 left-4" />
            <div className="flex flex-col md:flex-row items-center">
              {/* <img 
                src={Adith}
                alt="Adith L S" 
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-8" 
              /> */}
              <div className="text-black">
                <blockquote className="text-xl md:text-2xl font-dark italic mb-4">
                  Tactoe was born from my experiences as a freelancer juggling multiple projects. I realized I needed a tool that didn’t feel like pulling teeth to use. We’re building what I wish I had—a platform that makes project management feel less like work and more like a breeze.
                </blockquote>
                <div className="font-bold text-lg md:text-xl">Adith L S</div>
                <div className="text-primary-200">Founder & CEO</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Join Our Community</h3>
          <div className="md:flex md:items-center md:justify-center py-4 md:py-8 border-t border-gray-200">

{/* Social links */}
<ul className="flex  mb-4 md:order-1 md:ml-4 md:mb-0">
<li>
    <Link target="_blank" to="https://www.linkedin.com/company/tactoe" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full  transition duration-150 ease-in-out" aria-label="Twitter">
      <FontAwesomeIcon icon={faLinkedin} className="w-12 h-12" />
    </Link>
  </li>
  <li className="ml-10">
    <Link target="_blank" to="https://x.com/tactoeapp" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full  transition duration-150 ease-in-out" aria-label="Twitter">
      <FontAwesomeIcon icon={faXTwitter} className="w-12 h-12" />
    </Link>
  </li>
  <li className="ml-10">
    <Link target="_blank" to="https://discord.gg/NBGSNRcANS" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full  transition duration-150 ease-in-out" aria-label="Discord">
      <FontAwesomeIcon icon={faDiscord} className="w-12 h-12" />
    </Link>
  </li>
</ul>

</div>
<div className='flex justify-center text-center'>
Need Discord experts. Set up our community. Get 3 months free premium during Beta. Help shape tactoe.
<br />
Get in touch with us personally at adith@tactoe.app
</div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;

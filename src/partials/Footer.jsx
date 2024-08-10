import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faDiscord, faReddit, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-6">
            <div className="flex-shrink-0 mr-4 flex items-center">
              {/* Logo */}
              <Link to="/" className="block" aria-label="tactoe">
                <svg className="w-5 h-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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
              <div className="flex items-center">
                <Link to="/" className="block" aria-label="tactoe">
                  <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent text-xl font-bold">
                    tactoe.
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-6 lg:col-span-6">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
            <form onSubmit={handleEmailSubmit}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {submitMessage && (
                <p className={`text-sm ${submitMessage.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                  {submitMessage}
                </p>
              )}
          </div>          

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            
          <li>
          <Link target="_blank" to="https://www.linkedin.com/company/tactoe" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Discord">
      <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
    </Link>
  </li>
            <li className="ml-4">
  <Link target="_blank" to="https://x.com/tactoeapp" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Discord">
        <FontAwesomeIcon icon={faXTwitter} className="w-8 h-8" />
    </Link>
  </li>
            <li className="ml-4">
              <Link target="_blank" to="https://discord.gg/NBGSNRcANS" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Discord">
                <FontAwesomeIcon icon={faDiscord} className="w-8 h-8" />
              </Link>
            </li>
          </ul>

          {/* Footer bottom text */}
          <div className="text-sm text-gray-500 text-center">
            <p>&copy; {new Date().getFullYear()} tactoe. All rights reserved.</p>
            <p className="mt-2">Our landing page is open source! Check it out on <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a>. Contributions and PRs are welcome!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

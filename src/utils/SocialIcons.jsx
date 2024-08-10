import React from 'react';
import { faXTwitter, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = () => {
  return (
    <div className="hidden md:flex fixed top-1/2 right-4 transform -translate-y-1/2 flex-col z-50">
      <a 
        href="https://discord.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-black p-3 rounded-full hover:bg-gray-200 transition duration-300"
      >
        <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
      </a>
      <a 
        href="https://x.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-black p-3 rounded-full hover:bg-gray-200 transition duration-300"
      >
        <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
      </a>
      <a 
        href="https://www.reddit.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-black p-3 rounded-full hover:bg-gray-200 transition duration-300"
      >
        <FontAwesomeIcon icon={faReddit} className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialIcons;

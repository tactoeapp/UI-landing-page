import React, { useState } from 'react';

const TooltipAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-xs sm:max-w-sm bg-gradient-to-r from-primary to-accent border border-gray-300 rounded-lg shadow-lg p-4 z-50 transform transition-transform duration-300 ease-in-out scale-100">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors duration-300"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
          🚀 Be Part of the Early Adopter Squad!
        </h3>
        <p className="text-sm text-gray-100 mb-2 sm:mb-3">
          Sign up now to receive exclusive updates, sneak peeks, and
          behind-the-scenes looks at our latest features and plans.
        </p>
        <p className="text-sm text-gray-100">
          Access all features at no cost during our MVP phase, zero learning
          curve—just straightforward, powerful project management.
        </p>
      </div>
    )
  );
};

export default TooltipAlert;

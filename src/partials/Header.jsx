import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
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
             
            <Link to="/" className="block" aria-label="tactoe"> <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent text-xl font-bold">tactoe.</span>
            </Link>
            </div>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to={'/usecases'}>
                <span className="mr-5 bg-clip-text text-transparent bg-primary text-sm font-bold"> Use cases</span></Link>
              </li>
              <li>         <span className="ml-2 px-2 py-1 bg-[#00a686] text-white text-xs font-semibold rounded">
                MVP
              </span>
            
              </li>
        
            </ul>
   
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;

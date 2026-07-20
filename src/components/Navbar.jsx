import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Stories', href: '#stories' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent pt-2 pb-6'}`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-28">
          <div className="flex-shrink-0 -ml-2 sm:-ml-4">
            <a href="#home" className="flex items-center">
              <Image 
                src="/assets/livfit_logo_new.svg" 
                alt="LIV FIT GYM Logo" 
                width={320} 
                height={112} 
                className="h-20 md:h-32 w-auto object-contain"
                priority
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-accent transition-colors duration-300 font-semibold uppercase text-xs xl:text-sm tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 border-l border-neutral-800 pl-4 xl:pl-6 ml-2">
            <a href="tel:+919873500250" className="flex items-center text-gray-300 hover:text-accent transition-colors group">
              <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide">+91 9873500250</span>
            </a>

            <a href="mailto:livfitwithnomyths@gmail.com" className="flex items-center text-gray-300 hover:text-accent transition-colors">
              <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#121212] shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-neutral-900' : 'max-h-0'}`}>
        <div className="px-4 py-4 space-y-2 pb-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block w-full text-gray-300 hover:text-accent py-3 font-medium uppercase text-center tracking-wider hover:bg-neutral-800 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-full border-t border-neutral-800 my-2 pt-4 flex flex-col items-center gap-4">
             <a href="tel:+919873500250" className="flex items-center text-gray-300 hover:text-accent">
              <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 9873500250
            </a>
            <a href="mailto:livfitwithnomyths@gmail.com" className="flex items-center text-gray-300 hover:text-accent">
              <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              livfitwithnomyths@gmail.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

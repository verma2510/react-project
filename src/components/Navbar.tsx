import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarData = [
    "HOME",
    "ABOUT",
    "SERVICE",
    "TRAINING",
    "CAREER",
    "CONTACT US",
    "BLOG",
  ];

  const serviceDropdown = [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Website Development",
    "Pay Per Click"
  ];

  return (
    <div className="bg-[lightblue] text-gray-800 min-h-[70px] w-full">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <img
            src="https://orphicsolution.com/images/orphic1logo.png"
            alt="Company Logo"
            className="w-[100px] h-[70px] object-contain"
          />
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row cursor-pointer gap-4 items-center w-full md:w-auto`}>
          {navbarData.map((item) => (
            <li 
              key={item} 
              className="p-2 relative hover:text-[orange] duration-300 w-full md:w-auto text-center"
              onMouseEnter={() => item === "SERVICE" && setShowDropdown(true)}
              onMouseLeave={() => item === "SERVICE" && setShowDropdown(false)}
            >
              {item}
              {item === "SERVICE" && showDropdown && (
                <ul className="absolute md:top-full top-0 left-0 md:left-0 p-4 text-black sm:w-auto font-semibold bg-white shadow-md rounded-md w-full md:w-[230px] z-10">
                  {serviceDropdown.map((service) => (
                    <li 
                      key={service} 
                      className="p-2 hover:bg-gray-100 text-sm whitespace-normal"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

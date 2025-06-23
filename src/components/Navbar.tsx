import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navbarData = [
    "Home",
    "About",
    "Service",
    "Training",
    "Career",
    "Contact Us",
    "Blog",
  ];

  const serviceDropdown = [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Website Development",
    "Pay Per Click"
  ];

  return (
    <div className="bg-[lightblue] text-gray-800 h-[70px] flex justify-center items-center font-bold">
      <img
        src="https://orphicsolution.com/images/orphic1logo.png"
        alt="Company Logo"
        className="w-[100px] h-[70px] object-contain"
      />
      <ul className="flex cursor-pointer gap-4 justify-center items-center w-full max-w-[1200px]">
        {navbarData.map((item) => (
          <li 
            key={item} 
            className="p-2 relative hover:underline"
            onMouseEnter={() => item === "Service" && setShowDropdown(true)}
            onMouseLeave={() => item === "Service" && setShowDropdown(false)}
          >
            {item}
            {item === "Service" && showDropdown && (
              <ul className="absolute top-full  font-semibold left-0 bg-white shadow-md rounded-md w-[200px] z-10">
                {serviceDropdown.map((service) => (
                  <li 
                    key={service} 
                    className="p-2 hover:bg-gray-100 text-sm"
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
  );
};

export default Navbar;

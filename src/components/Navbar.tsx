import React from "react";

const Navbar: React.FC = () => {
  const navbarData = [
    "Home",
    "About",
    "Service",
    "Training",
    "Career",
    "Contact Us",
    "Blog",
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
          <li key={item} className="p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

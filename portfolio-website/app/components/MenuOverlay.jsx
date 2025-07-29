import React from "react";

const MenuOverlay = ({ links, onLinkClick }) => {
  const handleLinkClick = (href) => {
    // Navigate to the section with smooth scrolling
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Close the menu
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <div
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition-colors duration-300 cursor-pointer"
            onClick={() => handleLinkClick(link.path)}
          >
            {link.title}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;

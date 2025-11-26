import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "work", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },


    ];

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 bg-[#050414]/60 backdrop-blur-md text-white"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-3xl md:text-4xl font-logo font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Masum Parvez
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium text-lg text-gray-300">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
                                }`}
                        >
                            <button onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://github.com/masumparvez56"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#8245ec]"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/masumparvez56/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#8245ec]"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX
                            className="text-3xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <FiMenu
                            className="text-3xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/60 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""
                                    }`}
                            >
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/masumparvez56"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/masumparvez56/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;



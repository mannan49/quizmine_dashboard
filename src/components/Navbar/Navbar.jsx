import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">Parvaz</div>
        <div className="lg:hidden">
          {/* Hamburger Icon */}
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-1/2 bg-gray-900 p-4 transition-transform duration-300 ease-in-out transform z-50`}
      >
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              onClick={toggleMobileMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      {/* Dark Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsFillFilePdfFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { BsDatabaseAdd } from "react-icons/bs";
import { useSharedData } from "../../functions/SharedDataContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLogin, setIsLogin } = useSharedData();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Update the login state
    setIsLogin(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute bg-gray-900 text-white top-0 left-0 w-full p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center mb-2 ml-2">
          <BiWorld className="text-2xl" />
          <span className="text-white font-bold text-lg ml-2 ">Parvaz</span>
        </div>
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
        <div className="h-[80vh] grid grid-rows-[auto,auto]">
          <div>
            <ul className="space-y-6 mt-4 px-2">
              <li>
                <Link to="/" className="flex items-center gap-4">
                  <BiSolidDashboard />
                  <span className="text-white">Dashboard</span>
                </Link>
              </li>
              <li>
                <NavLink to="/skills" className="flex items-center gap-4">
                  <BsFillClipboardCheckFill />
                  <span className="text-white">Add Chapters</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/mcqs" className="flex items-center gap-4">
                  <BsDatabaseAdd />
                  <span className="text-white">Add MCQs</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/edit" className="flex items-center gap-4">
                  <BsPencilFill />
                  <span className="text-white">Edit MCQs</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center gap-4">
                  <BsFillFilePdfFill />
                  <span className="text-white">PDF Notes</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" className="flex items-center gap-4">
                  <FaUsers />
                  <span className="text-white">Users</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="px-4 flex flex-col-reverse">
            <NavLink
              to="/login"
              onClick={handleLogout}
              className="flex items-center gap-4"
            >
              <BiLogOutCircle />
              <button>Logout</button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* Dark Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

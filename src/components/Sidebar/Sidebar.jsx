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
const Sidebar = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useSharedData();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // navigate("/login");
    // Update the login state
    setIsLogin(false);
  };

  return (
    <div className="w-1/6 h-screen bg-headline  sticky top-0  p-4 shadow-md">
      <Link to="/">
        <div className="flex items-center mb-2 ml-2">
          <BiWorld className="text-2xl" />
          <span className="text-primary font-bold text-lg ml-2 ">Parvaz</span>
        </div>
      </Link>
      <div className="flex-col justify-end border-t-2 border-gray-800 font-bold my-4"></div>

      <div className="h-[80vh] grid grid-rows-[auto,auto]">
        <div>
          <ul className="space-y-6 mt-4 px-2">
            <li>
              <Link to="/" className="flex items-center gap-4">
                <BiSolidDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <NavLink to="/skills" className="flex items-center gap-4">
                <BsFillClipboardCheckFill />
                <span>Add Chapters</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mcqs" className="flex items-center gap-4">
                <BsDatabaseAdd />
                <span>Add MCQs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit" className="flex items-center gap-4">
                <BsPencilFill />
                <span>Edit MCQs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/pdf" className="flex items-center gap-4">
                <BsFillFilePdfFill />
                <span>PDF Notes</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className="flex items-center gap-4">
                <FaUsers />
                <span>Users</span>
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
  );
};

export default Sidebar;

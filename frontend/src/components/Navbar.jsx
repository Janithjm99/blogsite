import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <nav className="bg-white shadow-lg px-6 py-4">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo */}
          <div className="font-bold text-2xl text-gray-800">
            Asipya<span className="text-blue-500">Blog</span>
          </div>
          {/* Desktop Menu */}
          <div className="flex space-x-6 hidden md:flex">
            <Link to="/" className="text-gray-600 hover:text-blue-500 transition">
              HOME
            </Link>
            <Link to="/blogs" className="text-gray-600 hover:text-blue-500 transition">
              BLOGS
            </Link>
            <Link to="/creators" className="text-gray-600 hover:text-blue-500 transition">
              CREATORS
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-500 transition">
              ABOUT
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition">
              CONTACT
            </Link>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setShow(!show)}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && profile?.user?.role === "admin" && (
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white font-medium px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                DASHBOARD
              </Link>
            )}
            {!isAuthenticated ? (
              <Link
                to="/Login"
                className="bg-red-600 text-white font-medium px-5 py-2 rounded-md hover:bg-red-700 transition"
              >
                LOGIN
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-medium px-5 py-2 rounded-md hover:bg-red-700 transition"
              >
                LOGOUT
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="bg-gray-100 shadow-lg py-6 absolute top-16 left-0 w-full md:hidden">
            <ul className="flex flex-col items-center space-y-4 text-lg">
              <Link
                to="/"
                onClick={() => setShow(false)}
                className="text-gray-600 hover:text-blue-500 transition"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(false)}
                className="text-gray-600 hover:text-blue-500 transition"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(false)}
                className="text-gray-600 hover:text-blue-500 transition"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(false)}
                className="text-gray-600 hover:text-blue-500 transition"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(false)}
                className="text-gray-600 hover:text-blue-500 transition"
              >
                CONTACT
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

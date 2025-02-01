import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/users/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      // Store the token in localStorage
      toast.success(data.message || "User Logined successfully", {
        duration: 3000,
      });
      setProfile(data);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      setRole("");
      navigateTo("/");
    } catch (error) {
      console.log("err login");
      toast.error(
        error.response.data.message || "Please fill the required fields",
        {
          duration: 3000,
        }
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-600 via-indigo-700 to-gray-800 text-white">
      <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-lg p-6">
        <form onSubmit={handleLogin}>
          <div className="font-bold text-3xl text-center mb-6 text-blue-400">
          Asipya<span className="text-yellow-400">Blog</span>
          </div>
          <h1 className="text-xl font-semibold mb-6 text-white">Login</h1>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
          >
            <option value="">Select Role</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
            />
          </div>

          <p className="text-center mb-6 text-gray-400">
            New User?{" "}
            <Link to={"/register"} className="text-yellow-500">
              Register Now
            </Link>
          </p>

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 duration-300 rounded-md text-white font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

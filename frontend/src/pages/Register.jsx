import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Register() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();

  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/users/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(data.message || "User registered successfully");
      setProfile(data);
      setIsAuthenticated(true);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
      navigateTo("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Please fill the required fields"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-600 via-indigo-700 to-gray-800 text-white">
      <div className="w-full max-w-md bg-gray-900 shadow-lg rounded-lg p-6">
        <form onSubmit={handleRegister}>
          <div className="font-bold text-3xl text-center mb-6 text-blue-400">
            Asipya<span className="text-yellow-400">Blog</span>
          </div>
          <h1 className="text-2xl font-semibold mb-6">Register</h1>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
          />
          
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
          />

          <input
            type="number"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
          />

          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
          />

          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md bg-gray-800 text-white"
          >
            <option value="">Select Your Education</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
            <option value="BBA">BBA</option>
          </select>
          
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-800 border rounded-md overflow-hidden mr-4">
              <img
                src={photoPreview ? `${photoPreview}` : "https://via.placeholder.com/100"}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              onChange={changePhotoHandler}
              className="w-full p-3 bg-gray-800 text-white border rounded-md"
            />
          </div>

          <p className="text-center mb-6 text-gray-400">
            Already registered?{" "}
            <Link to={"/login"} className="text-yellow-500">
              Login Now
            </Link>
          </p>

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 duration-300 rounded-md text-white font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

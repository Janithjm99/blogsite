import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import Navbar from "../src/components/Navbar";
import About from "../src/pages/About";
import Blogs from "../src/pages/Blogs";
import Contact from "../src/pages/Contact";
import Dashboard from "../src/pages/Dashboard";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import { useAuth } from "./context/AuthProvider";
import UpdateBlog from "./dashboard/UpdateBlog";
import Creators from "./pages/Creators";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(
    location.pathname
  );
  const { blogs, isAuthenticated } = useAuth();
  console.log(blogs);
  console.log(isAuthenticated); // it is not using because every page refresh it was redirected to /login

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route
          exact
          path="/"
          element={ <Home /> }
        />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/creators" element={<Creators />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />

        {/* Single page route */}
        <Route exact path="/blog/:id" element={<Detail />} />

        {/* Update page route */}
        <Route exact path="/blog/update/:id" element={<UpdateBlog />} />

        {/* Universal route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
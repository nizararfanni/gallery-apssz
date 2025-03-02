import React, { useState } from "react";
import ImagePage from "./pages/ImagePage";
import Login from "./components/Forms/Login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Heades from "./components/Heades";
import Home from "./pages/Home";

const App = () => {
  // const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<ImagePage />} />
      </Routes>
    </div>
  );
};

export default App;

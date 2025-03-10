import React, { useState } from "react";
import ImagePage from "./pages/ImagePage";
import Login from "./components/Forms/Login";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/HomePage";
import Collection from "./pages/CollectionPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import UploadImage from "./pages/UploadImage";
import DummyFile from "./components/DummyFile";

const App = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {/* condiitonal jika user bedarad pada path login/error navbar hilang */}
      {location.pathname !== "/login" && location.pathname !== "*" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<ImagePage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/upload" element={<UploadImage />}/>
        <Route path="/dummy" element={<DummyFile />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#7E99A3] px-4 py-8 md:flex-row md:gap-6">
      <div className="flex flex-col items-center text-white font-bold mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl mb-4">Contact Me</h1>
        <h2 className="text-lg text-center">You can reach me on:</h2>
      </div>
      <div className="flex flex-col items-center text-white space-y-4">
        <a
          href="https://www.instagram.com/nzarr_arfan/"
          className="flex items-center gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
          <p>@nzar_arfann</p>
        </a>
        <a
          href="https://wa.me/085713296658"
          className="flex items-center gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
          <p>085713296658</p>
        </a>
        <a
          href="https://www.facebook.com/nzar_arfann"
          className="flex items-center gap-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
          <p>@nzar_arfann</p>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;

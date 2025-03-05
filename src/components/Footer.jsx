import React from "react";
import ListItems from "./fragments/ListItems";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex mih-h-screen flex-col lg:flex-row bg-black justify-between text-white p-8 gap-4">
      <div className="lg:w-2/6 flex ">
        <img
          className="lg:w-25 w-1/2 text-black"
          src="/src/assets/loho-2.png"
          alt=""
        />
        <div className="flex lg:flex-col flex-row gap-4 items-center">
          <h1 className="font-bold text-white">Gallery Photos</h1>
          <p>share your moments with the world through stunning photography</p>
        </div>
      </div>
      <div className="w-2/6 flex flex-col ">
        <h1 className="font-bold text-white">Quick Links</h1>
        <ListItems ItemsClass="text-white"></ListItems>
      </div>
      <div className="w-2/6 flex flex-col">
        <h1 className="font-bold text-white">Categories</h1>
        <p>anime</p>
        <p>novel</p>
        <p>manga</p>
        <p>game</p>
      </div>
      <div className="w-2/6 flex flex-col gap-5">
        <h1 className="font-bold text-white">Follow Us</h1>
        <div className="flex ">
          <div className="flex gap-5 flex-col mt-2">
            <FaInstagram />
            <FaWhatsapp></FaWhatsapp>
            <FaFacebook></FaFacebook>
          </div>
          <div className="flex gap-5 flex-col ms-4 text-sm">
            <p>nzar_arfann</p>
            <p>08571329968</p>
            <p>nizar kheneddy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

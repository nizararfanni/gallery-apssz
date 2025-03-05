import React, { useState } from "react";
import Button from "./fragments/Button";
import ListItems from "./fragments/ListItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container bg-white mx-auto max-w-screen-lg font-serif lg-flex p-2">
      <nav className="flex justify-between text-gray-700 font-bold  cursor-pointer">
        <div>
          <img
            className="lg:w-25 w-3/6 text-black rounded-lg" 
            src="https://img.icons8.com/?size=100&id=4538&format=png&color=000000"
            alt=""
          />
        </div>
        <ListItems ClassName="lg:flex hidden items-center gap-5 "></ListItems>

        <Button
          ClassName="lg:flex hidden "
          ClassButton="bg-blue-600  hover:bg-blue-700 text-white"
        >
          Uploads Photos
        </Button>
        <button className="lg:hidden block mx-4" onClick={toggleMenu}>
          <img
            src="https://img.icons8.com/?size=100&id=7613&format=png&color=000000"
            className="w-6"
            alt=""
          />
        </button>
      </nav>
      {isOpen && (
        <div className={`lg:hidden bg-white duration-500 ease-in-out `}>
          <ListItems
            ClassName="flex flex-col outline w-full "
            ItemsClass="w-full text-center p-2"
          ></ListItems>
          <Button
            ClassName="flex p-3  "
            ClassButton="bg-blue-600  hover:bg-blue-700 text-white"
          >
            gets the apps
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

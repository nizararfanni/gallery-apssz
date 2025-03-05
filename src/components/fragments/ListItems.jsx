import React from "react";
import { Link } from "react-router-dom";

const ListItems = ({ ClassName, ItemsClass }) => {
  return (
    <div className="flex ">
      <ul className={` ${ClassName}`}>
        <li
          className={` rounded-md   duration-300 ease-in-out hover:underline ${ItemsClass}`}
        >
          <Link to={"/"}>home</Link>
        </li>
        <li
          className={`  rounded-md  hover:underline   duration-300 ease-in-out ${ItemsClass}`}
        >
          <Link to={"/gallery"}>gallery</Link>
        </li>
        <li
          className={`  rounded-md hover:underline   duration-300 ease-in-out ${ItemsClass}`}
        >
          <Link to={"/collection"}>collection</Link>
        </li>
        <li
          className={`  rounded-md  hover:underline  duration-300 ease-in-out ${ItemsClass}`}
        >
          <Link to={"/gallery"}>about</Link>
        </li>
        <li
          className={` rounded-md  hover:underline  duration-300 ease-in-out ${ItemsClass}`}
        >
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default ListItems;

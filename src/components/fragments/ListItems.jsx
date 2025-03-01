import React from "react";

const ListItems = ({ ClassName, ItemsClass }) => {
  return (
    <div className="flex items-center justify-center">
      <ul className={` items-center gap-5 ${ClassName}`}>
        <li
          className={`p-2 rounded-md   duration-300 ease-in-out hover:underline ${ItemsClass}`}
        >
          Home
        </li>
        <li
          className={`  p-2 rounded-md  hover:underline   duration-300 ease-in-out ${ItemsClass}`}
        >
          Gallery
        </li>
        <li
          className={` p-2 rounded-md hover:underline   duration-300 ease-in-out ${ItemsClass}`}
        >
          Collection
        </li>
        <li
          className={`  p-2 rounded-md  hover:underline  duration-300 ease-in-out ${ItemsClass}`}
        >
          About
        </li>
        <li
          className={` p-2 rounded-md  hover:underline  duration-300 ease-in-out ${ItemsClass}`}
        >
          contact
        </li>
      </ul>
    </div>
  );
};

export default ListItems;

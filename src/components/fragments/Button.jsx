import React, { Children } from "react";

const Button = ({ children, ClassName ,ClassButton}) => {
  return (
    <div className={` items-center gap-5 justify-center  cursor-pointer ${ClassName}`}>
      <button className={`duration-300 ease-in-out  px-3  py-2 rounded-sm ${ClassButton}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;

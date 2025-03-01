import React from "react";
import ImageFeatures from "./fragments/ImageFeatures";

const MainContent = () => {
  return (
    <div className="flex ms-4 max-h-screen flex-col gap-4">
      <div >
        <p className="text-3xl font-bold ">Features Photos</p>
      </div>
      <div className="w-full grid grid-cols-3 gap-4 ">
       <ImageFeatures></ImageFeatures>
       <ImageFeatures></ImageFeatures>
       <ImageFeatures></ImageFeatures>
      </div>
    </div>
  );
};

export default MainContent;

import React from "react";
import Button from "./fragments/Button";

const Heades = () => {
  return (
    <div className="flex justify-center  max-h-screen">
      <div className=" text-center">
        <p className="text-4xl font-bold">Capture And Share Your Moments,</p>
        <p className="text-4xl font-bold">Beatiful Moments</p>
        <p className="text-sm mt-2">
          discover stunning photograph form talented photograph arround the
          world
        </p>
        <p className="text-sm">
          share your own story through captaiving images
        </p>
        <div className="flex justify-center gap-4 my-6">
          <Button ClassButton="bg-blue-600  hover:bg-blue-700 text-white font-bold">
            Explore Gallery
          </Button>
          <Button ClassButton="bg-white text-black font-bold outline hover:bg-gray-200">
            learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heades;

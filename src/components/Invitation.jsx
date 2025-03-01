import React from "react";
import Button from "./fragments/Button";

const Invitation = () => {
  return (
    <div className="my-6 flex mx-auto justify-center max-w-screen-lg min-h-max py-6 rounded-md  bg-blue-500">
      <div className="text-center text-white">
        <p className="text-4xl font-semibold p-6 ">
          Ready to Share You Moments ?
        </p>
        <h3>
          join our community of photographers and showcase your work to miloins
          of people
        </h3>
        <span>Wordwide</span>
        <div  className="flex justify-center py-6">
          <Button ClassButton="bg-white text-blue-500 hover:bg-blue-200 font-bold">Get Started Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Invitation;

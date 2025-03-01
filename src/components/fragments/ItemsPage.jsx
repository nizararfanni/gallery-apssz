import React from "react";

const ItemsPage = ({ name, overalPhotos , linkPhotos}) => {
  return (
    <div className="flex flex-col items-center border bg-white border-white rounded-lg shadow-lg">
      <img src={linkPhotos} className="w-1/2 mt-2" alt="Anime" />
      <div className="w-full ms-6 p-4">
        <p className="text-gray-700 font-bold">{name}</p>
        <p className="text-gray-600 font-semibold">{overalPhotos}</p>
      </div>
    </div>
  );
};

export default ItemsPage;

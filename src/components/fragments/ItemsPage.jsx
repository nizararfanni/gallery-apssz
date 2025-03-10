import React from "react";

const ItemsPage = ({ name, overalPhotos , linkPhotos}) => {
  return (
    <div className="flex flex-col items-center border bg-white border-white rounded-lg shadow-lg">
      <img src={linkPhotos} className="max-w-md objek-cover mt-2 h-32" alt="Anime" />
      <div className="w-full p-4">
        <p className="text-gray-700 font-bold">{name}</p>
        <p className="text-gray-600 font-semibold">{overalPhotos}</p>
      </div>
    </div>
  );
};

export default ItemsPage;

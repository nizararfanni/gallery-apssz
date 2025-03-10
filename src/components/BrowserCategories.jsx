import React, { useEffect, useState } from "react";
import ItemsPage from "./fragments/ItemsPage";

const BrowserCategories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  },[]);
  return (
    <div className="mt-10 w-full mx-auto bg-gray-200 py-3">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        Browse Categories
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {data.map((item) => (
          <div>
            <ItemsPage 
              linkPhotos={item.image}
              name={item.username}
              overalPhotos="1.2k Photos"
            ></ItemsPage>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowserCategories;

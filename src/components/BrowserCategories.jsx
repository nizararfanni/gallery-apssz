import React from "react";
import ItemsPage from "./fragments/ItemsPage";

const BrowserCategories = () => {
  return (
    <div className="mt-10 w-full mx-auto bg-gray-200 py-3">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        Browse Categories
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ms-4">
        <ItemsPage
          linkPhotos={"/src/assets/otaku.png"}
          name="Anime"
          overalPhotos="1.2k Photos"
        ></ItemsPage>
        <ItemsPage
          linkPhotos={"/src/assets/boy.png"}
          name="Anime"
          overalPhotos="1.2k Photos"
        ></ItemsPage>
        <ItemsPage
          linkPhotos={"/src/assets/boy2.png"}
          name="Anime"
          overalPhotos="1.2k Photos"
        ></ItemsPage>
        <ItemsPage
          linkPhotos={"/src/assets/games.png"}
          name="Anime"
          overalPhotos="1.2k Photos"
        ></ItemsPage>
      </div>
    </div>
  );
};

export default BrowserCategories;

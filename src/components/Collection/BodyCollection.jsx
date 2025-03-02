import React from "react";

const BodyCollection = () => {

    const photos = [
      {
        id: 1,
        src: "/src/assets/otaku.png",
        alt: "Image 1",
        description: "Description for Image 1",
      },
      {
        id: 2,
        src: "/src/assets/boy.png",
        alt: "Image 2",
        description: "Description for Image 2",
      },
      {
        id: 3,
        src: "/src/assets/boy2.png",
        alt: "Image 3",
        description: "Description for Image 3",
      },
      {
        id: 4,
        src: "/src/assets/games.png",
        alt: "Image 4",
        description: "Description for Image 4",
      },
      {
        id: 5,
        src: "/src/assets/loho.jpeg",
        alt: "Image 5",
        description: "Description for Image 5",
      },
      {
        id: 6,
        src: "/src/assets/loho-2.png",
        alt: "Image 6",
        description: "Description for Image 6",
      },
      {
        id: 7,
        src: "/src/assets/loho-2.png",
        alt: "Image 6",
        description: "Description for Image 6",
      },
      {
        id: 8,
        src: "/src/assets/loho-2.png",
        alt: "Image 6",
        description: "Description for Image 6",
      },
      {
        id: 9,
        src: "/src/assets/otaku.png",
        alt: "Image 7",
        description: "Description for Image 7",
      },
    ];
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-center p-2">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyCollection;

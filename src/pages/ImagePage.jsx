import { useState } from "react";

function ImagePage() {
  // Mendefinisikan state countIndex
  const [countIndex, setCountIndex] = useState(0);

  // Mendefinisikan array panels yang berisi objek dengan properti image
  const panels = [
    {
      image:
        "https://i.pinimg.com/564x/71/87/10/718710ca800cac1614c8b8fad032bda3.jpg",
      src: "gambar-1",
    },
    {
      image:
        "https://i.pinimg.com/564x/e1/5c/44/e15c44e4c4cd5f83c237cc4ea90afb19.jpg",
      src: "gambar-2",
    },
    {
      image:
        "https://i.pinimg.com/736x/52/85/cd/5285cd9f10f64a810dcc95152d046128.jpg",
      src: "gambar-3",
    },
    {
      image:
        "https://i.pinimg.com/736x/82/99/30/8299301f136fe21971ce5ccf794d26db.jpg",
      src: "gambar-4",
    },
    {
      image:
        "https://i.pinimg.com/736x/25/28/ef/2528ef445b249a3d56824b0c359b3f62.jpg",
      src: "gambar-5",
    },
    {
      image:
        "https://i.pinimg.com/736x/42/db/53/42db53b44236879445b770bf61e365b1.jpg",
      src: "gambar-6",
    },
    {
      image:
        "https://i.pinimg.com/736x/5b/0c/6a/5b0c6a9ae27f9b96e810d9410b29d9d3.jpg",
      src: "gambar-7",
    },
    {
      image:
        "https://i.pinimg.com/736x/bd/99/76/bd9976c21f52db379fc4d35955c48712.jpg",
      src: "gambar-8",
    },
    {
      image:
        "src/assets/login.jpg",
      src: "gambar-8",
    },
  ];

  // Fungsi untuk mengatur nilai countIndex ketika panel diklik
  const handleClick = (index) => {
    setCountIndex(index);
  };

  return (
    // Elemen utama dengan kelas CSS untuk mengatur tata letak dan gaya
    <main className="w-screen bg-red-500 h-screen overflow-hidden ">
      {/* Kontainer utama yang menggunakan background gambar berdasarkan countIndex */}
      <div
        className="w-full h-full bg-yellow-500 overflow-hidden flex justify-center items-center relative"
        style={{
          backgroundImage: `url(${panels[countIndex].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay gelap dengan efek blur */}
        <div className="inset-0 absolute bg-[rgba(0,0,0,0.5)] z-0 backdrop-blur-sm"></div>

        {/* Kontainer untuk panel-panel */}
        <div className="w-[1200px] h-[80vh] flex justify-center items-center gap-2 z-10">
          {/* Memetakan panels ke dalam elemen div yang dapat diklik */}
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`h-full bg-black cursor-pointer transition-all duration-500 ease-in-out rounded-2xl overflow-hidden block ${
                countIndex === index ? "w-[60%]" : "w-[10%]"
              }`}
            >
              {/* Gambar panel dengan properti src dan alt */}
              <img
                src={panel.image}
                alt={panel.src}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ImagePage;

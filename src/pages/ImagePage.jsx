import { useEffect, useState } from "react";

const ImagePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const [panels, setPanels] = useState([]);

  useEffect(() => {
    fetch("/datas.json")
      .then((res) => res.json())
      .then((result) => setPanels(result))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <main className="w-screen h-screen bg-black overflow-hidden">
      <div
        className="h-full w-full overflow-hidden flex items-center justify-center p-4 relative"
        style={{
          backgroundImage: `url(${panels[expandedIndex].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>
        <div className="flex w-full max-w-7xl h-[80vh] gap-2 items-center justify-center z-10">
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`
        h-full rounded-2xl bg-white cursor-pointer
        transition-all duration-500 ease-in-out overflow-hidden
        ${
          expandedIndex === index
            ? "w-[60%] sm:w-[80%]" // Mode Desktop 60%, Mobile 80%
            : "w-[10%] sm:w-[20%] hover:bg-gray-200" // Mode Desktop 10%, Mobile 20%
        }
        min-w-[40px] block
      `}
            >
              <img
                src={panel.image}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ImagePage;

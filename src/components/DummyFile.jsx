import { useState, useEffect } from "react";

function DummyFile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.username}</h3>
          <img
            src={item.image}
            alt={item.username}
            style={{ maxWidth: "200px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default DummyFile;

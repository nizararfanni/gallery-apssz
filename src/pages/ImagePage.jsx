import { useState, useEffect } from "react";
import { db } from "../lib/firebase/init";
import { collection, getDocs } from "firebase/firestore";

function ImagePage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const querySnapshot = await getDocs(collection(db, "photos"));
      const photoList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPhotos(photoList);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} width="200" />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ImagePage;
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../lib/firebase/init";

function UploadPhoto() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleUpload = async () => {
    try {
      if (!file) {
        console.log("No file selected");
        alert("No file selected!");
        return;
      }

      console.log(
        "Starting upload - File:",
        "Name:",
        file.name,
        "Title:",
        title
      );

      const storageRef = ref(storage, `gallery/${file.name}`);
      console.log("File ref created", storageRef);
      await uploadBytes(storageRef, file);
      console.log("File uploaded to upload");

      const photoURL = await getDownloadURL(storageRef);
      console.log("Generated URL:", photoURL);

      const docRef = await addDoc(collection(db, "photos"), {
        title: title,
        url: photoURL,
        createdAt: new Date(),
      });
      console.log("Firestore doc added with ID:", docRef.id);

      alert("Foto berhasil diupload!");
      setFile(null);
      setTitle("");
    } catch (error) {
      console.error("Upload failed:", error.message);
      alert("Error uploading file: " + error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Judul foto"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log("input tittle", e.target.value);
        }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadPhoto;

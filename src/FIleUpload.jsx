import React, { useEffect, useState } from "react";
import { storage, db } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  doc,
  collection,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import Images from "./Images";
import "./forimages.css";
import add_image from "./assets/add-image.png";

export default function FIleUpload() {
  const [file, setFile] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadAllImages();
  }, []);

  const loadAllImages = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "Images"));
    let currentImages = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      currentImages = [...currentImages, doc.data().ImageURL];
    });
    setImages(currentImages);
    setLoading(false);
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file === "") {
      alert("File is empty");
    }

    const storageRef = ref(storage, `images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploaded(false);
    setShow(false);

    uploadTask.on(
      "state_changed",
      (snapshhot) => {
        const progress =
          (snapshhot.bytesTransferred / snapshhot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("Download URL: ", downloadURL);
          const imageStoreRef = doc(db, "Images", file.name);
          setDoc(imageStoreRef, { ImageURL: downloadURL }).then(() => {
            loadAllImages();
          });
        });
        setUploaded(true);
        setTimeout(() => {
          setUploaded(false);
        }, 2000);
      }
    );
  };

  return (
    <div>
      {!loading && (
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Upload An Image
        </button>
      )}
      {show && (
        <div className="div1">
          <div>
            <input
              type="file"
              accept="/image/*"
              onChange={handleChange}
            ></input>
            {/* <button onClick={handleUpload}>Save</button> */}
            {/* <input className={`${file == '' ? 'isNotFile' : 'isFile'}`} type="file" id="file" />
            <label htmlFor="file" className="forLabel">
              <span>Add an Image</span>
              <img className="input-image" src={add_image} alt="Avatar Image" />
            </label> */}
          </div>
          <div>
            <button className="input-style" onClick={handleUpload}>
              Save
            </button>
            <button
              style={{ backgroundColor: "red", height: "45px" }}
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {uploaded && <p className="success-message">Image was uploaded</p>}
      {loading ? (
        <p style={{ fontSize: "84px" }}>Loading...</p>
      ) : (
        <div>
          <div>
            <Images images={images} />
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import PicData from "../PicData";
import Button from "./Button";
import "./Gallery.css";
const Gallery = () => {
  const [image, setImage] = useState(PicData[0]);
  const [count, setCount] = useState(1);

  const handleNext = () => {
    const currentIndex = PicData.indexOf(image);
    const nextIndex = currentIndex + 1;
    setImage(PicData[nextIndex]);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>IMAGE GALLERY</h1>
      <div className="container">
        <img src={image} alt="gallery" />
        <small>{count}</small>
        <br />
        <Button name="NEXT" btnclick={handleNext} />
      </div>
    </div>
  );
};
export default Gallery;

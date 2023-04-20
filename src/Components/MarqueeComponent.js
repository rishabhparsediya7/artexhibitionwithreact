import React, { useEffect, useState } from "react";

const MarqueeComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const marqueeImages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos/?albumId=2"
      );

      const data = await response.json();

      setImages(data);
    };
    marqueeImages();
  }, []);

  return (
    <>
      {images.map((img) => (
        <div className="marquee__images">
          <div
            className="img"
            key={img.id}
          >
          <img style={{width:"300px", height:"300px"}} src={img.url} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default MarqueeComponent;

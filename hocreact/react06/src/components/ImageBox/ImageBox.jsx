import { useEffect, useRef } from "react";
import Image from "./Image";

const ImageBox = () => {
  const imageRef = useRef();
  useEffect(() => {
    console.log(imageRef);
  }, []);
  return (
    <div>
      <Image ref={imageRef} />
      <button
        onClick={() => {
          imageRef.current.zoomIn();
        }}
      >
        ZoomIn
      </button>
      <button
        onClick={() => {
          imageRef.current.zoomOut();
        }}
      >
        ZoomOut
      </button>
    </div>
  );
};

export default ImageBox;

import React, { useEffect, useState } from "react";
let isLoading = true;
let isMounted = false;
const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=10`,
    );
    const photos = await response.json();
    if (isMounted) {
      setPhotos(photos);
    }
    isLoading = false;
  };

  useEffect(() => {
    isMounted = true;
    getPhotos();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        photos.map(({ id, thumbnailUrl }) => (
          <img key={id} src={thumbnailUrl} />
        ))
      )}
    </div>
  );
};

export default Photo;

/*
Cleanup:
- Dọn dẹp các bộ nhớ tạm, event, timer
- Xử lý setState khi call API (Chỉ set khi component chưa unmount)
*/

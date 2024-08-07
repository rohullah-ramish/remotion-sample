import { useEffect, useState } from "react";

const IMAGES = [
  "https://cdn.wallpapersafari.com/8/46/lf1eAy.jpg",
  "https://wallpapercave.com/wp/wp12770964.jpg",
  "https://wallpapercave.com/wp/wp11770950.jpg",
  "https://wallpapercave.com/wp/wp11660850.jpg",
  "https://wallpapercave.com/wp/wp11550844.jpg",
];

function ImageSlideshow() {
  const [imageIndex, setImageIndex] = useState(0);
  const [handle, setHandle] = useState<any>(null);

  useEffect(() => {
    const delay = 2000; // Change image every 2 seconds
    const id = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, delay);
    setHandle(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={IMAGES[imageIndex]} />
    </div>
  );
}

export default ImageSlideshow;

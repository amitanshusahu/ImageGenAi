import ImageGrid from "./micro-Ui/ImageGrid"
import { useEffect, useState } from 'react';
import { Skeleton } from "./ui/skeleton";
import ProfileHeader from "./micro-Ui/ProfileHeader";

export default function MyImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const userImages = await fetch('/api/myimages');
      const res = await userImages.json();
      
      if(res.status)
      setImages(res.images.slice(0, 10) || []);

    };

    fetchImages();
  }, []);

  return (
    <div className="border-2 rounded-md overflow-hidden">
      <ProfileHeader />
      <div className="w-full h-full overflow-x-hidden overflow-y-auto pb-80">
        {((images.length != 0) ? <ImageGrid images={images} /> : <div className="skeleton w-[calc(100%-48px)] h-[60%] mx-6 rounded-lg"></div>)}
        
      </div>
    </div>
  )
}
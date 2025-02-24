const image1 = "/images/gallery/gallery-1.png";
const image2 = "/images/gallery/gallery-2.png";
const image3 = "/images/gallery/gallery-3.png";
const image4 = "/images/gallery/gallery-4.png";
const image5 = "/images/gallery/gallery-5.png";
const image6 = "/images/gallery/gallery-6.png";
const image7 = "/images/gallery/gallery-7.png";
const image8 = "/images/gallery/gallery-8.png";
const image9 = "/images/gallery/gallery-9.png";
import Image from "next/image";
const FeaturedTab = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        {" "}
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image1}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image2}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image3}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image4}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image5}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image6}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image7}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image8}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-16px">
          <Image
            src={image9}
            alt="image"
            className="theme-transition-3 w-full rounded-16px hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedTab;

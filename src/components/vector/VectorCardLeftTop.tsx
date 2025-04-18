const vector = "/images/homeOne/vector-card-left-top.png";
import Image from "next/image";

const VectorCardLeftTop = () => {
  return (
    <div className="absolute -top-0 left-0">
      <Image
        src={vector}
        width={165}
        height={108}
        alt="Vector image"
        className="relative max-xxl:w-[150px] max-lg:w-[140px]"
      />
      <div className="absolute left-0 top-0 ps-6  pt-1 xxl:ps-2 ">
        <p className="h3 rounded-16px bg-primaryColor px-6 py-2  font-semibold shadow-five lg:py-3 xxl:px-8 xxl:py-4">
          $99
        </p>
      </div>
    </div>
  );
};

export default VectorCardLeftTop;

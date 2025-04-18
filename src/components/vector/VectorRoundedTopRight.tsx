const vector = "/images/homeOne/vector-ratting-bottom-right.png";
import { IconQuote } from "@tabler/icons-react";
import Image from "next/image";

const VectorRoundedTopRight = () => {
  return (
    <div className="absolute right-0 top-0">
      <Image
        src={vector}
        width={75}
        height={75}
        alt="Vector image"
        className="relative"
      />

      <div className="absolute right-0 top-0 flex  items-center justify-center rounded-full bg-neutral-20 p-3 text-h3 font-semibold text-neutral-700 ">
        <IconQuote size={32} />
      </div>
    </div>
  );
};

export default VectorRoundedTopRight;

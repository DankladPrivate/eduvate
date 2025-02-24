"use client";
const bannerRoundText = "/images/homeOne/round-text.png";
import VideoModal from "@/components/sharedComponents/VideoModal";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

const BannerVideoButton = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="absolute right-0 top-1/2  z-30 -translate-y-1/2 rounded-full bg-primaryColor p-2 ">
        <div className="relative">
          <Image
            src={bannerRoundText}
            width={120}
            height={120}
            alt="Rounded Text"
            className=" animate-spin-slow"
          />
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full  bg-white p-3 sm:p-5 ">
            <button
              onClick={() => setOpen(!isOpen)}
              className="flex items-center"
            >
              <IconPlayerPlayFilled size={42} />
            </button>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId="4DCTTrGjGU4" />
    </>
  );
};

export default BannerVideoButton;

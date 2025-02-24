"use client";
const brandImage1 = "/images/home-three/brand-1.png";
const brandImage2 = "/images/home-three/brand-2.png";
const brandImage3 = "/images/home-three/brand-3.png";
const brandImage4 = "/images/home-three/brand-4.png";
const brandImage5 = "/images/home-three/brand-5.png";
import H5 from "@/components/sharedComponents/H5";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider = () => {
  return (
    <div className="container section-gap-top">
      <div className="padding-t-80 padding-b-80 border-b border-t  border-neutral-40">
        <H5 className="padding-b-32 text-center">
          TRUSTED BY OVER 12,500 GREAT TEAMS
        </H5>
        <div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={10}
            speed={5000}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                spaceBetween: 20,
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              992: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              1200: {
                spaceBetween: 24,
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage1}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage2}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage3}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage4}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage5}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage1}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage2}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage4}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage3}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <Image
                  src={brandImage5}
                  width={196}
                  height={58}
                  alt="Brand Image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;

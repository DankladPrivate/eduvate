const aboutRoundProgress = "/images/home-five/about-rounded-progress.png";
const aboutIcon = "/images/home-four/about-icon.png";
const image = "/images/home-four/about-us.png";
const mission = "/images/home-four/icon-mission.png";
const vission = "/images/home-four/icon-vission.png";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import D4 from "@/components/sharedComponents/D4";
import H4 from "@/components/sharedComponents/H4";
import H5 from "@/components/sharedComponents/H5";
import InfoAboutFour from "@/components/sharedComponents/InfoAboutFour";
import TextL from "@/components/sharedComponents/TextL";
import TextM from "@/components/sharedComponents/TextM";
import TextS from "@/components/sharedComponents/TextS";
import Fade from "@/motionEffect/Fade";
import FadeDownToTop from "@/motionEffect/FadeDownToTop";
import FadeLeft from "@/motionEffect/FadeLeft";
import FadeRight from "@/motionEffect/FadeRight";
import FadeTopToDown from "@/motionEffect/FadeTopToDown";
import { IconStarsFilled, IconVersions } from "@tabler/icons-react";
import Image from "next/image";

const HomeFourAboutUs = () => {
  return (
    <div className="section-gap-top section-gap-bottom overflow-hidden bg-neutral-20">
      <div className="container gap-40px grid-cols-12 items-center xxl:grid">
        <div className="col-start-1 col-end-6">
          <div className="relative mx-auto w-fit">
            <Image
              src={image}
              width={526}
              height={665}
              alt="About image"
              className="rounded-16px"
            />
            <div className="absolute bottom-5 left-0 md:-left-20 md:bottom-40">
              <InfoAboutFour
                icon={<IconVersions />}
                iconBg="Purple"
                textOne="20% OFF"
                textTwo="For All Courses"
              />
            </div>
            <div className="absolute right-0 top-0 sm:top-10 md:-right-20 md:top-20">
              <InfoAboutFour
                icon={<IconStarsFilled />}
                iconBg="Yellow"
                textOne="4.9(8.6K)"
                textTwo="AVG Reviews"
              />
            </div>
            <div className="absolute left-0 top-0 md:-left-20 md:top-20">
              <Image
                src={aboutIcon}
                width={140}
                height={140}
                alt="About icon"
              />
            </div>

            <div className="absolute -bottom-[52px] -right-[100px] hidden md:block">
              <div className="relative w-fit">
                <Image
                  src={aboutRoundProgress}
                  width={251}
                  height={251}
                  alt="Progress Image"
                />
                <div className="absolute bottom-12 left-[58px] text-center">
                  <H4>Excellent</H4>
                  <TextS className="font-medium text-neutral-500">
                    90% Satisfied Clients
                  </TextS>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-7 col-end-13 max-xxl:padding-t-80">
          <FadeLeft>
            <H5>About Eduvate</H5>
          </FadeLeft>
          <FadeRight>
            <D4 className="pt-4">
            Where Education Meets{" "}
              <span className="border-b-2 border-secondaryColorTwo text-secondaryColorTwo">
              Innovation
              </span>
            </D4>
          </FadeRight>
          <div className="gap-40px flex flex-col  pt-6">
            <Fade>
              <TextL>
              At Eduvate, we believe that learning tech should be like building in the real world—messy, exciting, and wildly rewarding. That’s why our courses are built by people who’ve been there, coded that, and want to pass the torch forward.
              </TextL>
            </Fade>
            <div className="gap-32px flex flex-col">
              <FadeTopToDown>
                <div className="gap-32px flex max-sm:flex-col sm:items-center">
                  <div className="w-fit shrink-0 rounded-full bg-white p-4">
                    <Image
                      src={mission}
                      width={48}
                      height={48}
                      alt="Missing image"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <H4>Our Mission</H4>
                    <TextM>
                    We’re on a mission to transform passive learners into skilled creators. Eduvate delivers hands-on tech training, crafted by industry pros and powered by practical experience—because the best way to learn is by doing.
                    </TextM>
                  </div>
                </div>{" "}
              </FadeTopToDown>
              <FadeDownToTop>
                <div className="gap-32px flex max-sm:flex-col sm:items-center">
                  <div className="w-fit shrink-0 rounded-full bg-white p-4">
                    <Image
                      src={vission}
                      width={48}
                      height={48}
                      alt="Missing image"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <H4>Our Vision</H4>
                    <TextM>
                    To ignite a movement where education evolves beyond books and blackboards—shaping doers, builders, and thinkers through learning that’s real, relevant, and ready for the future.
                    </TextM>
                  </div>
                </div>
              </FadeDownToTop>
            </div>
            <ButtonPrimary button buttonText="Read More" link="/about-us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFourAboutUs;

import FooterHomeThree from "@/components/footer/FooterHomeThree";
import NavbarFour from "@/components/navbar/NavbarFour";
import BrandSlider from "@/components/pages/home-eight/BrandSlider";
import UniversityCourses from "@/components/pages/home-eight/UniversityCourses";
import HomeFourAboutUs from "@/components/pages/home-four/HomeFourAboutUs";
import HomeFourTestimonial from "@/components/pages/home-four/HomeFourTestimonial";
import BannerNine from "@/components/pages/home-nine/BannerNine";
import TeachingStars from "@/components/pages/home-nine/TeachingStars";
import HomeSixEvent from "@/components/pages/home-six/HomeSixEvent";
import Certificate from "@/components/pages/home-two/Cartificate";
import SignInForm from "@/components/pages/signin/SignInForm";
import Fade from "@/motionEffect/Fade";

const Home = () => {
  return (
    <>
      <NavbarFour />
      <BannerNine />
      {/* <AnimateScrollSlider /> */}
       <BrandSlider />

      {/* <Fade>
        <Counter />
      </Fade> */}
      <UniversityCourses />
      <HomeSixEvent />
      <HomeFourAboutUs />
      <TeachingStars />
      <Certificate />
      <HomeFourTestimonial />
      {/* <SignInForm /> */}
      {/* <FooterHomeOne /> */}
      <FooterHomeThree />
      {/* <BrandSlider /> */}
      {/* <Instructor />
      <WhyChooseUs />
      <CustomersSay />
      <NewsLetter />
      <FooterHomeOne /> */}
    </>
  );
};

export default Home;

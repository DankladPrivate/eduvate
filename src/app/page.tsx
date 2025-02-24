import FooterHomeOne from "@/components/footer/FooterHomeOne";
import NavbarEight from "@/components/navbar/NavbarEight";
import NavbarFive from "@/components/navbar/NavbarFive";
import NavbarFour from "@/components/navbar/NavbarFour";
import NavbarOne from "@/components/navbar/NavbarOne";
import NavbarSeven from "@/components/navbar/NavbarSeven";
import NavbarSix from "@/components/navbar/NavbarSix";
import NavbarTwo from "@/components/navbar/NavbarTwo";
import Banner from "@/components/pages/home-one/Banner";
import Counter from "@/components/pages/home-one/Counter";
import Courses from "@/components/pages/home-one/Courses";
import CustomersSay from "@/components/pages/home-one/CustomersSay";
import Instructor from "@/components/pages/home-one/Instructor";
import NewsLetter from "@/components/pages/home-one/NewsLetter";
import WhyChooseUs from "@/components/pages/home-one/WhyChooseUs";
import Fade from "@/motionEffect/Fade";

const Home = () => {
  return (
    <>
      <NavbarOne />
      {/* <NavbarTwo /> */}
      {/* <NavbarEight /> */}
      <Banner />
      <Fade>
        <Counter />
      </Fade>
      <Courses />
      <Instructor />
      <WhyChooseUs />
      <CustomersSay />
      <NewsLetter />
      <FooterHomeOne />
    </>
  );
};

export default Home;

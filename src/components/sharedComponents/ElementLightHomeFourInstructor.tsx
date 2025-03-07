const element = "/images/homeOne/element-why-choose-us.png";
import Image from "next/image";
const ElementLightHomeFourInstructor = () => {
  return (
    <div className="section-gap-top absolute top-0 hidden md:block  lg:left-20">
      <Image
        src={element}
        width={200}
        height={117}
        alt="Element"
        className="animate-ping-smooth max-xl:w-[150px] xl:max-4xl:w-[200px] 4xl:w-[180px]"
      />
    </div>
  );
};

export default ElementLightHomeFourInstructor;

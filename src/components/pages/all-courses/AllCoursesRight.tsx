const image1 = "/images/instructor/instructor-1.png";
const image2 = "/images/instructor/instructor-2.png";
const image3 = "/images/instructor/instructor-3.png";
import ButtonUnderLine from "@/components/button/ButtonUnderLine";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import SidebarSearchBox from "@/components/sharedComponents/SidebarSearchBox";
import MoreInstructorCard from "./MoreInstructorCard";

const AllCoursesRight = () => {
  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-32">
      <SidebarSearchBox placeholder="Search Instructor..." />
      <div className="padding-all-32 flex flex-col gap-6 rounded-16px bg-white">
        <h4 className="h4 font-semibold">More Instructor</h4>
        <BorderHorizontalN40 />

        <MoreInstructorCard
          image={image1}
          name="Esther Howard"
          designation="UI/UX Designer"
        />

        <BorderHorizontalN40 />
        <MoreInstructorCard
          image={image2}
          name="Floyd Miles"
          designation="Floyd Miles"
        />

        <BorderHorizontalN40 />
        <MoreInstructorCard
          image={image3}
          name="Jacob Jones"
          designation="Scrum Master"
        />
        <BorderHorizontalN40 />
        <ButtonUnderLine buttonText="See All" />
      </div>
    </div>
  );
};

export default AllCoursesRight;

import {
  IconClockHour5,
  IconStarFilled,
  IconUserCircle,
  IconVersions,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ButtonHart from "../button/ButtonHart";
import BorderHorizontal from "../customBorder/BorderHorizontal";
import VectorCardRightBottom from "../vector/VectorCardRightBottom";

type Props = {
  cardImage: StaticImageData | string;
  courseType: string;
  courseTitle: string;
  totalLessons: number;
  courseDuration: string;
  instructor: string;
  ratting: number;
};

const CoursesCard = ({
  cardImage,
  courseType,
  courseTitle,
  totalLessons,
  courseDuration,
  instructor,
  ratting,
}: Props) => {
  return (
    <div className="flex max-w-[400px] flex-col items-center justify-center gap-6 self-stretch">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={cardImage}
          width={400}
          height={306}
          alt="Card Image"
          className="theme-transition-3 rounded-xl hover:scale-102"
        />
        <VectorCardRightBottom />
      </div>
      <div>
        <div className="flex flex-col gap-4 px-4 sm:gap-6 sm:px-8">
          <div className="flex items-center justify-between">
            <p className="mtext rounded-8px bg-neutral-20 px-4 py-2 text-center">
              {courseType}
            </p>
            <ButtonHart />
          </div>
          <h5 className="h4 font-semibold">
            <Link href="/courses/courses-details-one">{courseTitle}</Link>
          </h5>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconVersions size={32} className="max-sm:h-4 max-sm:w-4" />
              <span className="lText font-medium">{totalLessons} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <IconClockHour5 size={32} className="max-sm:h-4 max-sm:w-4" />
              <span className="lText font-medium">{courseDuration}</span>
            </div>
          </div>
          <BorderHorizontal />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:flex-shrink-0">
              <IconUserCircle size={32} className="max-sm:h-4 max-sm:w-4" />
              <Link href="/instructor/all-course" className="lText font-medium">
                {instructor}
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:flex-shrink-0">
              <div className="text-secondaryColor">
                <IconStarFilled className="max-sm:h-4 max-sm:w-4" />
              </div>
              <p className="lText font-semibold">
                4.8 <span className="font-normal">({ratting}K)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

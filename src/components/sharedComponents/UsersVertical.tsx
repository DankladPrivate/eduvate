const reviewImage1 = "/images/homeTwo/review-icon-1.png";
const reviewImage2 = "/images/homeTwo/review-icon-2.png";
const reviewImage3 = "/images/homeTwo/review-icon-3.png";
const reviewImage4 = "/images/homeTwo/review-icon-4.png";
const reviewImage5 = "/images/homeTwo/review-icon-5.png";
import Image from "next/image";

const UsersVertical = ({ data }: { data?: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={reviewImage1}
        width={48}
        height={48}
        alt="Reviewer Image"
        className=""
      />
      <Image
        src={reviewImage2}
        width={48}
        height={48}
        alt="Reviewer Image"
        className="-mt-[25px] rounded-full border-2 border-primaryColor"
      />
      <Image
        src={reviewImage3}
        width={48}
        height={48}
        alt="Reviewer Image"
        className="-mt-[25px] rounded-full border-2 border-primaryColor"
      />
      <Image
        src={reviewImage4}
        width={48}
        height={48}
        alt="Reviewer Image"
        className="-mt-[25px] rounded-full border-2 border-primaryColor"
      />
      <Image
        src={reviewImage5}
        width={48}
        height={48}
        alt="Reviewer Image"
        className="-mt-[25px] rounded-full border-2 border-primaryColor"
      />
      {data && (
        <div
          className={` -mt-[25px] flex
        h-12 w-12 items-center 
        justify-center rounded-full border-2 border-primaryColor bg-primaryColor px-3 py-1 text-center text-xsText font-semibold text-bgColorOne`}
        >
          <span>{data}</span>
        </div>
      )}
    </div>
  );
};

export default UsersVertical;

"use client";
import ButtonRounded from "../button/ButtonRounded";

const SearchBarTablePrimary = ({
  placeholder = "Search",
  className = "bg-white border-neutral-40",
  handleSearch,
}: {
  placeholder?: string;
  className?: string;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div
      className={`flex  items-center justify-between rounded-60px border py-2  pe-2 ps-5 lg:ps-8 xxl:min-w-[396px] ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="me-3 w-full bg-inherit placeholder:text-neutral-300 focus:outline-none "
        onChange={handleSearch}
      />
      <ButtonRounded iconName="Search" />
    </div>
  );
};

export default SearchBarTablePrimary;

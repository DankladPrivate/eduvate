"use client";
import ButtonPagination from "@/components/button/ButtonPagination";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import Dropdown from "@/components/dropdown/Dropdown";
import H4 from "@/components/sharedComponents/H4";
import SearchBarTablePrimary from "@/components/sharedComponents/SearchBarTablePrimary";
import TextM from "@/components/sharedComponents/TextM";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { orderListData } from "../../../../../public/data/orderListData";
import OrderListTable from "./OrderListTable";

type TTable = {
  id: string;
  image: StaticImageData | string;
  coursesName: string;
  orderId: string;
  orderDate: string;
  price: number;
  payment: string;
  index: number;
}[];

const OrdersList = () => {
  const category = [{ label: "All" }, { label: "New" }, { label: "Recent" }];

  const [tableData, setTableData] = useState<TTable>(orderListData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const result = orderListData.filter((item) =>
      item.coursesName.toLowerCase().includes(searchTerm),
    );
    setTableData(result);
  };
  return (
    <div className="padding-all-32 rounded-16px border border-neutral-30 bg-white ">
      <div className="flex items-center justify-between gap-4 max-md:flex-col md:gap-6">
        <H4>Order List</H4>
        <div className="flex items-center gap-4 max-md:flex-col md:gap-6">
          <SearchBarTablePrimary handleSearch={handleSearch} />
          <div className="flex items-center gap-2 ">
            <p className="whitespace-nowrap text-mText text-neutral-500">
              Sort By :
            </p>
            <div className="rounded-16px border border-neutral-40 px-4 py-2">
              <Dropdown options={category} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <BorderHorizontalN40 />
      </div>

      {/* table contents start */}
      <OrderListTable tableData={tableData} />
      {/* table contents end */}

      {tableData.length > 0 && (
        <>
          <div className="py-6">
            <BorderHorizontalN40 />
          </div>
          <div className="flex items-center justify-between gap-4 max-md:flex-col sm:gap-6">
            <TextM>Showing 1 to 6 of 50 entries</TextM> <ButtonPagination />
          </div>
        </>
      )}
    </div>
  );
};
export default OrdersList;

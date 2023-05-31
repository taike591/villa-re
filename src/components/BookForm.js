import React from "react";

import AdultsDropsdown from "../components/AdultsDropsdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

const BookForm = () => {
  return (
    <form className="h-[300px] w-full lg:h-[100px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className=" flex-1 border-r">
          <CheckIn />
        </div>
        <div className=" flex-1 border-r">
          <CheckOut />
        </div>
        <div className=" flex-1 border-r">
          <AdultsDropsdown />
        </div>
        <div className=" flex-1 border-r">
          <KidsDropdown />
        </div>
      </div>
    </form>
  );
};

export default BookForm;

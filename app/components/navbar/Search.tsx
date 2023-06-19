"use client";

import { useSearchParams } from "next/navigation";
import { BiSearch } from "react-icons/bi";

const Search = () => {
    const params = useSearchParams();

    const locationValue = params?.get("locationValue");
    const startDate = params?.get("startDate");
    const endDate = params?.get("endDate");
    const guestCount = params?.get("guestCount");

    return (
        <div
            className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
        >
            <div
                className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
            >
                <div
                    className="
            text-gray-800 
           dark:text-gray-200
           font-jetbrains  
            px-6
          "
                >
                    Any Where
                </div>
                <div
                    className="
            hidden 
            sm:block 
            font-jetbrains 
            text-gray-800 
           dark:text-gray-200 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
                >
                    Any Week
                </div>
                <div
                    className="
                    font-jetbrains 
            pl-6 
            pr-2 
            text-gray-800 
           dark:text-gray-200 
            flex 
            flex-row 
            items-center 
            gap-3
          "
                >
                    <div className="hidden sm:block">Any Guest</div>
                    <div
                        className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
                    >
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

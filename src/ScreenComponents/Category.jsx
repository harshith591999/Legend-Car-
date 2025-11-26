import React from "react";
import { Import } from "lucide-react";
import Data from "../Shared/Data";
const Category = () => {
  return (
    <div className="mt-40 flex text-center justify-center flex-col gap-10 p-10">
      <h1 className=" text-3xl font-bold mb-6">Browse by Type</h1>
      <div className="   grid grid-cols-3 sm:grid-cols-4 md:grid-colos-6 lg:grid-cols-8 gap-3">
        {Data.Category.map((catagory, index) => (
          <div
            className="border-2 border-gray-200 rounded-xl   flex items-center justify-center flex-col cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-200"
            key={index}
          >
            <img
              src={catagory.icon}
              alt={catagory.name}
              className="h-14 w-14"
            />
            <h2>{catagory.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;

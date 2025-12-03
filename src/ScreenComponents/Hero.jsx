import react from "react";
import Search from "./Search";
const Hero = () => {
  return (
    <div>
      <div
        className=" flex flex-col gap-6 text-center  p-10 py-20  w-full bg-[#eef0fc]   items-center 
          h-[650px] ">
        <h2 className="text-lg font-semibold">
          Find Car For Sale and For Rent Near You
        </h2>

        <h2 className="text-[60px] font-bold">Find Your Dream Car Today </h2>
        <Search />
        <img src="./public/tesla.png" alt="Tesla" className="mt-10" />
      </div>
    </div>
  );
};
export default Hero;

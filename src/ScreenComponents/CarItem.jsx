import { Separator } from "@/components/ui/separator";
import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";

const CarItem = ({ Car }) => {
  if (!Car) return null;

  return (
    <div>
      <div className=" rounded-xl bg-white border hover:shadow-md cursor-pointer">
        <div>
          <h2
            className="bg-green-500 text-white
         rounded-full absolute m-2 px-2  text-sm "
          >
            New
          </h2>
          <img
            src={Car.image}
            width={"100%"}
            height={250}
            alt={Car.title ?? "car image"}
            className="rounded-t-xl
            "
          />
          <div className="p-4">
            <h1 className="font-bold text-black text-lg mb-2">{Car.name}</h1>
            <Separator />
            <div className=" grid grid-cols-3 mt-5">
              <div className="flex  flex-col gap-2.5  items-center mb-2 ">
                <BsFillFuelPumpFill />
                <h1>{Car.fuelType}</h1>
              </div>
              <div className="flex  flex-col gap-2.5  items-center mb-2 ">
                <IoMdSpeedometer />
                <h1>{Car.mile}</h1>
              </div>
              <div className="flex  flex-col gap-2.5  items-center mb-2 ">
                <GiGearStickPattern />
                <h1>{Car.geartype}</h1>
              </div>
            </div>
            <Separator className="my-2" />
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-xl ">$ {Car.price}</h2>
              <h2 className="text-sm text-primary flex items-center gap-1">
                View deatils
                <MdOpenInNew />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarItem;

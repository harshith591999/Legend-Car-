import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "../Shared/Data";

const Search = () => {
  return (
    <div
      className=" flex self-center gap-5 p-5 bg-white rounded-md md:rounded-full flex-col md:flex-row
    items-center w-[60%] md:w-max "
    >
      <Select>
        <SelectTrigger className=" outsline-none md:border-none w-full shadow-none text-lg ">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Old</SelectItem>
          <SelectItem value="dark">New</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className=" outsline-none md:border-none w-full shadow-none text-lg ">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>

        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem value={maker.name} key={index}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />
      <Select>
        <SelectTrigger className=" outsline-none md:border-none w-full shadow-none text-lg ">
          <SelectValue placeholder="Car Price" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount} key={index}>
              {price.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <CiSearch className="text-[50px] bg-primary p-3 rounded-full text-white hover:scale-110 transition-all duration-200" />
      </div>
    </div>
  );
};
export default Search;

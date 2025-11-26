import FakeData from "@/Shared/FakeData";
import React from "react";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Mostsearchedcar() {
  console.log(FakeData.CarList);
  return (
    <div className="mx-24">
      <h1 className="font-bold text-3xl  text-center mt-6 mb-7">
        The Most Searched Cards
      </h1>
      <Carousel>
        <CarouselContent>
          {FakeData.CarList.map((Car, index) => (
            <CarouselItem className="basis-1/4">
              <CarItem Car={Car} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Mostsearchedcar;

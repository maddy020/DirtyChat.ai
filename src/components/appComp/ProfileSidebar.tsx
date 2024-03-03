import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import landing from "../../assets/landing.svg";
import Feature from "./Feature";
import { useState } from "react";
export default function ProfileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Image
        src={arrow}
        alt="icon"
        className="cursor-pointer right-80 top-16 absolute z-50 w-8 h-8 "
        onClick={handleClick}
      />
      <div
        className={
          isOpen
            ? "w-80  flex flex-col justify-start border-l border-[#6E78DA] overflow-y-scroll max-h-[92vh] fixed top-16 p-4 scrollbar-hide right-0 z-5"
            : "hidden"
        }
      >
        <Carousel>
          <CarouselContent className="relative">
            <CarouselItem>
              <Image src={landing} alt="model" />
            </CarouselItem>
            <CarouselItem>
              <Image src={landing} alt="model" />
            </CarouselItem>
            <CarouselItem>
              <Image src={landing} alt="model" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 bg-none" />
          <CarouselNext className="absolute top-1/2 right-4" />
        </Carousel>
        <div className="text-white p-4 ">
          <h1 className="text-lg font-bold">Emily</h1>
          <p className="text-sm font-semibold">Description To be added here</p>
          <p className="text-sm font-semibold">Description To be added here</p>
        </div>
        <hr />
        <div className="text-white p-4 ">
          <h1 className="text-lg font-bold">Personality Attributes</h1>
          <div className="grid grid-cols-2 gap-4 ">
            <Feature />
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
        <div className="text-white p-4">
          <h1 className="text-lg font-bold">Personality Attributes</h1>
          <div className="grid grid-cols-2 gap-4 ">
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
      </div>
    </>
  );
}

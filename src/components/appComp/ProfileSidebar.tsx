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
export default function ProfileSidebar({
  isProfileOpen,
}: {
  isProfileOpen: boolean;
}) {
  return (
    <div className=" right-0">
      <div className="w-full relative right-0">
        <div
          className={
            isProfileOpen
              ? "w-80 flex flex-col justify-start border-l border-[#6E78DA] overflow-y-scroll max-h-[92vh]  scrollbar-hide right-0 z-10 bg-[#1A1C27]"
              : "w-0  flex flex-col justify-start  overflow-y-scroll max-h-[92vh]  scrollbar-hide right-0 z-10"
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
            <p className="text-sm font-semibold">
              Description To be added here
            </p>
            <p className="text-sm font-semibold">
              Description To be added here
            </p>
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
      </div>
    </div>
  );
}

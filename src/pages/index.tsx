import Footer from "@/components/appComp/Footer";
import UserNavbar from "@/components/appComp/UserNavbar";
import UserSidebar from "@/components/appComp/UserSidebar";
import TitleBox from "@/components/appComp/TitleBox";
import Banner from "@/components/appComp/Banner";
import Models from "@/components/appComp/Models";
import explore from "../assets/explore.svg";
import Frequent from "../assets/Frequent.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <UserNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <UserSidebar isOpen={isOpen} />
      <main className="w-full px-5 mt-20">
        <div className=" md:pl-[130px]  md:h-full md:flex md:flex-col md:justify-start ">
          <Banner />
          <br />
          <TitleBox img={explore} />
          <Models />
          <TitleBox img={Frequent} />
          <Accordion
            type="single"
            collapsible
            className="w-full  py-4 md:p-10 flex flex-col md:gap-2"
          >
            <AccordionItem
              value="item-1"
              className="text-lg   md:px-4 md:py-2 rounded-xl border-none md:text-2xl"
            >
              <AccordionTrigger>How does AI girlfriend work</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="text-lg   md:px-4 md:py-2 rounded-xl border-none md:text-2xl no-underline"
            >
              <AccordionTrigger>How does AI girlfriend work</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="text-lg   md:px-4 md:py-2 rounded-xl border-none md:text-2xl"
            >
              <AccordionTrigger>How does AI girlfriend work</AccordionTrigger>
              <AccordionContent className="text-base md:text-xl">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="py-4">
            <h1 className="text-2xl font-bold md:text-3xl md:font-bold">
              Header
            </h1>
            <p className="text-base  md:text-xl mt-5 font-semibold text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

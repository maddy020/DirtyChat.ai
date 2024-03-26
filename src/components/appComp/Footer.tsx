import Image from "next/image";
import discord from "../../assets/discord.svg";
import message from "../../assets/message.svg";
import FooterInfo from "./FooterInfo";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex md:flex-row md:gap-10 md:pt-10 text-white  ">
        <div className="flex flex-col md:justify-start items-center pt-10 md:pt-0 md:w-1/2 xl:w-1/3 ">
          <h1 className="text-xl font-bold md:text-2xl xl:text-4xl">
            Dirty Chat.
            <span className="text-[#C62744]">ai</span>
          </h1>
          <p className=" text-base pt-2 text-justify md:text-base font-semibold items-cente xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-row gap-10 md:w-1/2 xl:w-2/3 xl:justify-around">
          <FooterInfo head="Features" p1="Generate Image" p2="Chat" />
          <FooterInfo head="Legal" p1="Privacy Policy" p2="Terms Of Use" />
          <FooterInfo head="Socials" p1="Discord" p2="Reddit" />
        </div>
      </div>
      <br />
      <hr className="hidden md:block" />
      <br />
      <div className="w-full flex items-center md:flex-row md:justify-between mb-16 md:mb-0 ">
        <p>@2024,All Rights Reserved</p>
        <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
          <Image src={discord} alt="img" />
          <Image src={message} alt="img" />
        </div>
      </div>
    </>
  );
}

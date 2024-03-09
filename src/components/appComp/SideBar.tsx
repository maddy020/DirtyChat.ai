import home from "../../assets/home.svg";
import group from "../../assets/group.svg";
import discord from "../../assets/discord.svg";
import message from "../../assets/message.svg";
import star from "../../assets/star.svg";
import user from "../../assets/user.svg";
import SideButton from "./Sidebutton";
export default function SideBar({ isOpen, setIsOpen }: any) {
  return (
    <main
      className={
        isOpen
          ? "flex md:flex-col w-full px-2 bg-[#1A1C27]  items-center md:mt-[4.4rem] md:h-[91.7vh] md:justify-between md:py-6 fixed z-10 md:top-0 md:left-0 transition-all duration-400 ease-in md:w-[231px] overflow-hidden md:border-r md:border-t md:border-[#6E78DA]"
          : "border-t z-10 pt-3 w-full px-2 fixed bottom-0  md:w-[84px] flex md:flex-col bg-[#1A1C27]  items-center  md:mt-[4.4rem] md:h-[91.7vh] md:justify-between md:py-6  md:top-0 md:left-0 md:overflow-hidden transition-all duration-400 ease-in md:border-r md:border-[#6E78DA]"
      }
    >
      <div className=" flex flex-row  gap-8 md:flex-col md:px-4 w-full">
        <SideButton img={home} text="Home" />
        <SideButton img={message} text="Chats" />
        <SideButton img={user} text="Account" />
        <SideButton img={star} text="Premium" />
      </div>
      <div className="hidden md:flex md:flex-col md:gap-8 md:w-full md:px-4">
        <SideButton img={discord} text="discord" />
        <SideButton img={group} text="Reddit" />
      </div>
    </main>
  );
}

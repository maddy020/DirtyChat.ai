import Image from "next/image";
import edit from "../../assets/edit.svg";
import searchIcon from "../../assets/searchIcon.svg";
import ChatProfile from "@/components/appComp/ChatProfile";
export default function Chats() {
  return (
    <div
      className="w-full md:w-1/4 md:p-6 flex flex-col justify-start 
      gap-8 md:border-r border-[#6E78DA] h-full "
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Chats</h1>
        <Image src={edit} alt="img" className="cursor-pointer" />
      </div>
      <div className="relative">
        <Image
          src={searchIcon}
          alt="search"
          className="absolute mt-1.5 ml-2 p-1"
        />
        <input
          type="text"
          className="bg-[#42497D] p-2 rounded-full w-full px-10 text-lg font-semibold outline-none border-none"
        />
        <ul className="w-full pt-6 flex flex-col justify-start cursor-pointer max-h-[36rem] overflow-y-scroll scrollbar-hide ">
          <li>
            <ChatProfile />
          </li>
          <li>
            <ChatProfile />
          </li>
          <li>
            <ChatProfile />
          </li>
          <li>
            <ChatProfile />
          </li>
          <li>
            <ChatProfile />
          </li>
          <li>
            <ChatProfile />
          </li>
          <li>
            <ChatProfile />
          </li>
          <li>
            <ChatProfile />
          </li>
        </ul>
      </div>
    </div>
  );
}

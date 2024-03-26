import Image from "next/image";
import edit from "../../assets/edit.svg";
import searchIcon from "../../assets/searchIcon.svg";
import ChatProfile from "@/components/appComp/ChatProfile";
import { useState } from "react";
export default function Contacts({
  data,
  modelId,
  setModelId,
}: {
  data: Array<{}>;
  modelId: number | null;
  setModelId: any;
}) {
  const handleClick = (item: any, id: number) => {
    setModelId(item.id);
    setSelectedId(id);
  };
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <div
      className=" md:p-6 flex flex-col justify-start 
      gap-8 md:border-r border-[#494747] h-full "
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
          className="bg-[#494747] p-2 rounded-full w-full px-10 text-lg font-semibold outline-none border-none"
        />
        <ul className="w-full pt-6 flex flex-col justify-start cursor-pointer max-h-[26rem] overflow-y-scroll scrollbar-hide ">
          {data.map((item, id) => {
            return (
              <li key={id} onClick={() => handleClick(item, id)}>
                <ChatProfile item={item} isClicked={id === selectedId} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

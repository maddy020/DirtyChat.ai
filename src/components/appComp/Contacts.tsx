import Image from "next/image";
import edit from "../../assets/edit.svg";
import searchIcon from "../../assets/searchIcon.svg";
import ChatProfile from "@/components/appComp/ChatProfile";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Contacts({
  data,
  modelId,
  setModelId,
}: {
  data: Array<{}>;
  modelId: string | null;
  setModelId: any;
}) {
  const router = useRouter();
  const handleClick = (item: any, id: number) => {
    setModelId(item.id);
    setSelectedId(id);
    router.push(`/chat/${item.id}`);
  };
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <>
      <div className="flex flex-row justify-between pb-1">
        <h1 className="text-2xl font-bold">Chats</h1>
        <Image src={edit} alt="img" className="cursor-pointer" />
      </div>
      <div className="relative h-full md:h-[555px]   ">
        <Image
          src={searchIcon}
          alt="search"
          className="absolute mt-1.5 ml-2 p-1"
        />
        <input
          type="text"
          className="bg-[#494747] p-2 rounded-full w-full px-10 text-lg font-semibold outline-none border-none"
        />
        <ul className="w-full h-4/5 md:h-[510px] xl:h-[600px]  pt-6 flex flex-col justify-start cursor-pointer overflow-y-scroll scrollbar-hide">
          {data.map((item, id) => {
            return (
              <li key={id} onClick={() => handleClick(item, id)}>
                <ChatProfile item={item} isClicked={id === selectedId} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

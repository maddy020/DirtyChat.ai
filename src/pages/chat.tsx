import NavBar from "@/components/appComp/NavBar";
import SideBar from "@/components/appComp/SideBar";
import Chats from "../components/appComp/Chats";
import ChatHistory from "@/components/appComp/ChatHistory";
import { useState } from "react";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="h-[100vh]">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="pl-[110px] pt-16 h-full flex ">
        <Chats />
        <ChatHistory />
      </div>
    </main>
  );
}

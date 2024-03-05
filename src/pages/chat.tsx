import NavBar from "@/components/appComp/NavBar";
import SideBar from "@/components/appComp/SideBar";
import Contacts from "../components/appComp/Contacts";
import ChatHistory from "@/components/appComp/ChatHistory";
import { useState } from "react";
import ProfileSidebar from "@/components/appComp/ProfileSidebar";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleState = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <main className="h-[100vh] w-full  ">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="pl-[110px] pt-16 h-full flex w-full">
        <div className="w-80">
          <Contacts />
        </div>
        <div className="w-3/4 relative">
          <ChatHistory handleState={handleState} />
        </div>
        <ProfileSidebar isProfileOpen={isProfileOpen} />
      </div>
    </main>
  );
}

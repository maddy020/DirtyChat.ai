import NavBar from "@/components/appComp/NavBar";
import SideBar from "@/components/appComp/SideBar";
import Contacts from "../components/appComp/Contacts";
import ChatHistory from "@/components/appComp/ChatHistory";
import { useState } from "react";
import axios from "axios";
import ProfileSidebar from "@/components/appComp/ProfileSidebar";
import { GetServerSidePropsContext } from "next";

export default function Chat({ data }: { data: Array<{}> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [modelId, setModelId] = useState(null);

  const handleState = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} />
      <main className="pl-4 pt-20 h-[96vh] md:pl-[110px] md:pt-16 md:flex">
        <div
          className={`${
            modelId !== null ? "hidden" : ""
          } w-full md:block md:w-80`}
        >
          <Contacts data={data} modelId={modelId} setModelId={setModelId} />
        </div>
        {modelId === null && (
          <div className="hidden md:w-full md:relative md:flex md:justify-center md:items-center">
            Welcome to chat section
          </div>
        )}
        {modelId !== null && (
          <div className="w-full md:w-3/4 md:relative md:h-full">
            <ChatHistory handleState={handleState} modelId={modelId} />
          </div>
        )}
        {modelId !== null && (
          <ProfileSidebar isProfileOpen={isProfileOpen} modelId={modelId} />
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = context.req.cookies;
  const token = cookies.token;
  const admin = cookies.admin;
  if (!token || admin === "true") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const res = await axios("http://localhost:8000/admin/models", {
    withCredentials: true,
  });
  const data = res.data;
  return {
    props: { data },
  };
}

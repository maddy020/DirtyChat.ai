import UserNavbar from "@/components/appComp/UserNavbar";
import UserSidebar from "@/components/appComp/UserSidebar";
import Contacts from "../../components/appComp/Contacts";
import ChatHistory from "@/components/appComp/ChatHistory";
import { useEffect, useState } from "react";
import axios from "axios";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import ProfileSidebar from "@/components/appComp/ProfileSidebar";
import type { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

import { createClient } from "../../../utils/supabase/server-props";

export default function Chat({ Data }: { Data: Array<{}> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [modelId, setModelId] = useState<number | null>(null);
  const handleState = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const router = useRouter();
  const path = router.asPath;
  useEffect(() => {
    async function getModelId() {
      const modelNumString = path.split("/")[2];
      const modelNum =
        modelNumString === undefined ? null : parseInt(modelNumString);
      setModelId(modelNum);
    }
    getModelId();
  }, [path]);
  return (
    <>
      <UserNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <UserSidebar isOpen={isOpen} />
      <main className="pt-24 relative h-[100vh] md:pl-20 md:pt-20 md:flex">
        <div
          className={`${
            modelId !== null ? "hidden" : ""
          } h-[75.5vh] px-6 md:px-4 md:py-2 flex flex-col justify-between 
          md:border-r border-[#494747] md:block md:w-3/5 lg:w-1/3  md:h-full`}
        >
          <Contacts data={Data} modelId={modelId} setModelId={setModelId} />
        </div>
        {modelId === null && (
          <div className="hidden md:w-full md:relative md:flex md:justify-center md:items-center">
            Welcome to chat section
          </div>
        )}
        {modelId !== null && (
          <div className="w-full px-2 md:w-3/4 md:relative h-[500px] md:h-[590px] xl:h-[685px] flex flex-col justify-between ">
            <ChatHistory handleState={handleState} modelId={modelId} />
          </div>
        )}
        {modelId !== null && (
          <ProfileSidebar
            isProfileOpen={isProfileOpen}
            setIsProfileOpen={setIsProfileOpen}
            modelId={modelId}
          />
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabase = createClient(context);
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, error } = await supabase.auth.getUser();
  if (error || !data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const res = await axios(`${Base_Url}/admin/models`, {
    withCredentials: true,
  });
  const Data = res.data;
  return {
    props: { Data },
  };
}

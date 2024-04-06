import UserNavbar from "@/components/appComp/UserNavbar";
import UserSidebar from "@/components/appComp/UserSidebar";
import Contacts from "../../components/appComp/Contacts";
import ChatHistory from "@/components/appComp/ChatHistory";
import { useEffect, useState } from "react";
import axios from "axios";
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
      <main className="pl-4 pt-20 h-[96vh] md:pl-[110px] md:pt-16 md:flex">
        <div
          className={`${
            modelId !== null ? "hidden" : ""
          } w-full md:block md:w-80`}
        >
          <Contacts data={Data} modelId={modelId} setModelId={setModelId} />
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

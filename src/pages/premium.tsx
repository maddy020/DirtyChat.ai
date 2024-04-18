import UserSidebar from "@/components/appComp/UserSidebar";
import planet from "../assets/planet.svg";
import Image from "next/image";
import UserNavbar from "@/components/appComp/UserNavbar";
import { useEffect, useState } from "react";
export default function Account() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [token, setToken] = useState<number>(0);

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (t) {
      setToken(parseInt(t));
    }
  }, []);

  return (
    <>
      <UserNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <UserSidebar isOpen={isOpen} token={token} />
      <main className="pt-24 h-[90vh] md:h-[100vh] px-6 flex flex-col justify-around items-center">
        <>
          <Image src={planet} alt="user" className="w-96 md:w-1/3" />
        </>
        <h1 className="text-2xl font-semibold">Coming Soon.....</h1>
      </main>
    </>
  );
}

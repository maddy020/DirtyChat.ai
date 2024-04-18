import UserSidebar from "@/components/appComp/UserSidebar";
import user from "../assets/user.svg";
import Image from "next/image";
import axios from "axios";
import UserNavbar from "@/components/appComp/UserNavbar";
import { useState, useEffect } from "react";
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
      <main className="pt-16 h-[90vh] px-6">
        <div className="flex flex-col items-center gap-6 py-6 ">
          <h1 className="text-xl font-semibold">My Account</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center">
            <Image
              src={user}
              alt="user"
              width={90}
              height={100}
              className="rounded-full border-2 border-primary-500"
            />
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="flex justify-between">
                <h2>Name</h2>
                <h2>Madhav</h2>
              </li>
              <li className="flex justify-between">
                <h2>Email Address</h2>
                <h2>Madhav</h2>
              </li>
              <li className="flex justify-between">
                <h2>Gender</h2>
                <h2>Madhav</h2>
              </li>
              <li className="flex justify-between">
                <h2>Password</h2>
                <h2>jnjf</h2>
              </li>
            </ul>
            <div className="flex flex-col gap-10">
              <button className="p-2 w-full justify-center border-2 border-primary-500 rounded-full">
                Edit Profile
              </button>
              <div className="w-full flex items-center justify-center">
                <button className="p-2 w-1/2 justify-center border-2 border-primary-500 rounded-full">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

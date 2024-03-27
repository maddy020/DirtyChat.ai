import Image from "next/image";
import user from "../../assets/user.svg";
import logout from "../../assets/logout.svg";
import pass from "../../assets/pass.svg";
import dropdown from "../../assets/dropdowb.svg";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminNavbar({ isOpen, setIsOpen }: any) {
  const [currUser, setcurrUser] = useState<string | null>(null);
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  useEffect(() => {
    let currUser = localStorage.getItem("currUser");
    setcurrUser(currUser);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get(`${Base_Url}/auth/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("currUser");
      setcurrUser(null);
      router.push("/");
    } catch (error) {
      console.log("Error in signing out", error);
    }
  };

  return (
    <main className="w-full fixed  top-0 z-10 justify-between items-center text-xl bg-[#121212]  border-b border-[#393646] px-4 pt-3 pb-2 font-semibold flex flex-row  md:px-8  ">
      <div></div>
      <div className="flex flex-row gap-12 items-center justify-center">
        {currUser !== null && (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex gap-2">
                  <Image
                    src={user}
                    alt="user"
                    className="border-white border-2 rounded-full h-9 w-9 cursor-pointer"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-sm">Name Name</p>
                    <p className="text-xs">Admin</p>
                  </div>
                  <Image src={dropdown} alt="i" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#000] rounded-lg mt-2 w-full flex flex-col items-start">
                <DropdownMenuLabel className="cursor-pointer flex">
                  <Image src={user} alt="" />
                  Manage Account
                </DropdownMenuLabel>
                <DropdownMenuLabel className="cursor-pointer flex">
                  <Image src={pass} alt="" />
                  Forgot Password
                </DropdownMenuLabel>
                <DropdownMenuLabel
                  className="cursor-pointer flex"
                  onClick={handleLogout}
                >
                  <Image src={logout} alt="" />
                  Logout
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </main>
  );
}

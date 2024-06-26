import Image from "next/image";
import search from "../../assets/searchIcon.svg";
import hamburger from "../../assets/hamburger.svg";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import user from "../../assets/user.svg";
import { useRouter } from "next/router";
import { createClient } from "../../../utils/supabase/component";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
export default function UserNavbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const [currUser, setcurrUser] = useState<string | null>(null);
  const [loader, setLoader] = useState(false);
  const supabase = createClient();
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
      await supabase.auth.signOut();
      localStorage.removeItem("currUser");
      toast.success("Logged out successfully");
      setcurrUser(null);
      router.push("/");
    } catch (error) {
      console.log("Error in signing out", error);
    }
  };

  return (
    <main className="w-full fixed  top-0 z-10 justify-between items-center text-xl  bg-[#121212]   border-b border-[#393646] p-4    font-semibold flex flex-row  md:px-8  ">
      <div className="flex flex-row gap-12  items-center">
        <Image
          src={hamburger}
          alt="Ham"
          className="cursor-pointer hidden md:block"
          onClick={handleClick}
        />
        <h2 className="cursor-pointer">
          Dirtychat.<span className="text-[#C62744]">ai</span>
        </h2>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <Image
          src={search}
          alt="search"
          className="cursor-pointe hidden md:block"
        />

        {currUser === null && (
          <LoginModal
            setcurruser={setcurrUser}
            setLoader={setLoader}
            loader={loader}
          />
        )}
        {currUser === null && (
          <SignupModal
            setcurruser={setcurrUser}
            setLoader={setLoader}
            loader={loader}
          />
        )}
        {currUser !== null && (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={user}
                  alt="user"
                  className="border-white border-2 rounded-full h-8 w-8 cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#121212] rounded-xl absolute right-2 z-20">
                <DropdownMenuLabel className="cursor-pointer">
                  <Link href="/account">My Account</Link>
                </DropdownMenuLabel>
                <DropdownMenuLabel
                  className="cursor-pointer"
                  onClick={handleLogout}
                >
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

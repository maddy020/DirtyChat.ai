import Image from "next/image";
import search from "../../assets/searchIcon.svg";
import hamburger from "../../assets/hamburger.svg";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import user from "../../assets/user.svg";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRecoilState } from "recoil";
import { createClient } from "../../../utils/supabase/component";
import { userAtom } from "@/store/atom/auth";

export default function NavBar({ isOpen, setIsOpen }: any) {
  const [userId, setUser] = useRecoilState(userAtom);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log("Navbar", userId);
  const router = useRouter();
  const supabase = createClient();
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser({ session: null });
      router.push("/");
    } catch (error) {
      console.log("Error in signing out", error);
    }
  };

  return (
    <main className="w-full fixed  top-0 z-10 justify-between items-center text-xl  bg-[#1A1C27]   border-b border-[#6E78DA] p-4  bg-[#1A11C27]  font-semibold flex flex-row  md:px-8  ">
      <div className="flex flex-row gap-12  items-center">
        <Image
          src={hamburger}
          alt="Ham"
          className="cursor-pointer hidden md:block"
          onClick={handleClick}
        />
        <h2 className="cursor-pointer">Dirtychat.ai</h2>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <Image
          src={search}
          alt="search"
          className="cursor-pointe hidden md:block"
        />

        {userId.session === null && <LoginModal />}
        {userId.session === null && <SignupModal />}
        {userId.session !== null && (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={user}
                  alt="user"
                  className="border-white border-2 rounded-full h-8 w-8 cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1A1C27] rounded-lg">
                <DropdownMenuLabel className="cursor-pointer">
                  My Account
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

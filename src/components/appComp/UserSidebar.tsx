import home from "../../assets/home.svg";
import group from "../../assets/group.svg";
import discord from "../../assets/discord.svg";
import fire from "../../assets/fire.svg";
import token from "../../assets/token.svg";
import message from "../../assets/message.svg";
import star from "../../assets/star.svg";
import user from "../../assets/user.svg";
import UserAdminSidebutton from "./UserAdminSidebutton";
import { useRouter } from "next/router";

export default function UserSidebar({ isOpen }: { isOpen: boolean }) {
  const router = useRouter();
  const curRoute = router.asPath;

  return (
    <main
      className={
        isOpen
          ? "flex md:flex-col w-full px-2 bg-[#121212]  items-center md:mt-[4.4rem] md:h-[91.7vh] md:justify-between md:py-6 fixed z-10 md:top-0 md:left-0 transition-all duration-400 ease-in md:w-[231px] overflow-hidden md:border-r md:border-t md:border-[#393646]"
          : "border-t bg-[#121212] z-10 pt-3 w-full px-2 fixed bottom-0  md:w-[75px] flex md:flex-col items-center  md:mt-[4.4rem] md:h-[91.7vh] md:justify-between md:py-6  md:top-0 md:left-0 md:overflow-hidden transition-all duration-400 ease-in md:border-r md:border-[#393646]"
      }
    >
      <div className=" flex flex-row justify-between gap-1 md:flex-col w-full">
        <UserAdminSidebutton
          img={home}
          text="Home"
          href="/"
          isOpen={isOpen}
          isActive={curRoute === "/"}
        />
        <UserAdminSidebutton
          img={message}
          text="Chats"
          href="/chat"
          isOpen={isOpen}
          isActive={curRoute === "/chat"}
        />
        <UserAdminSidebutton
          img={user}
          text="Account"
          href="/"
          isOpen={isOpen}
          isActive={curRoute === "/account"}
        />
        <UserAdminSidebutton
          img={star}
          text="Premium"
          href="/"
          isOpen={isOpen}
          isActive={curRoute === "/premium"}
        />
        <div className="hidden md:block">
          <UserAdminSidebutton
            img={token}
            text="Tokens"
            href="/"
            isOpen={isOpen}
            isActive={curRoute === ""}
          />
          <UserAdminSidebutton
            img={fire}
            text="Streak"
            href="/"
            isOpen={isOpen}
            isActive={curRoute === ""}
          />
        </div>
      </div>
      <div className="hidden md:flex md:flex-col md:gap-2 md:w-full md:px-4">
        <UserAdminSidebutton
          img={discord}
          text="discord"
          href="/"
          isOpen={isOpen}
          isActive={curRoute === "/discord"}
        />
        <UserAdminSidebutton
          img={group}
          text="Reddit"
          href="/"
          isOpen={isOpen}
          isActive={curRoute === "/group"}
        />
      </div>
    </main>
  );
}

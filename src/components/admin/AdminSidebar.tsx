import home from "../../assets/home.svg";
import logout from "../../assets/logout.svg";
import user from "../../assets/user.svg";
import usergroup from "../../assets/usergroup.svg";
import UserAdminSidebutton from "../appComp/UserAdminSidebutton";
import { useRouter } from "next/router";
export default function AdminSidebar() {
  const router = useRouter();
  const curRoute = router.asPath;

  return (
    <main className="flex md:flex-col px-4 w-full  bg-[#000]  items-center  md:h-[100vh] md:gap-28 md:py-6 fixed z-10 md:top-0 md:left-0 transition-all duration-400 ease-in md:w-[231px] overflow-hidden md:border-r md:border-t md:border-[#393646]">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold">DirtyChat.ai</h1>
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <div className=" flex flex-row  gap-8 md:flex-col w-full">
          <UserAdminSidebutton
            img={home}
            text="Dashboard"
            href="/admin/dashboard"
            isOpen={true}
            isActive={curRoute === "/admin/dashboard"}
          />
          <UserAdminSidebutton
            img={usergroup}
            text="Characters"
            href="/admin/characters"
            isOpen={true}
            isActive={curRoute === "/admin/characters"}
          />
          <UserAdminSidebutton
            img={user}
            text="Users"
            href="/admin/users"
            isOpen={true}
            isActive={curRoute === "/admin/users"}
          />
        </div>
        <div className="hidden md:flex md:flex-col md:gap-8 md:w-full md:px-4">
          <UserAdminSidebutton
            isOpen={true}
            img={logout}
            text="Signout"
            href="/"
            isActive={false}
          />
        </div>
      </div>
    </main>
  );
}

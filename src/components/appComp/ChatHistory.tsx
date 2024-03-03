import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import ProfileSidebar from "./ProfileSidebar";
export default function ChatHistory() {
  return (
    <div className="hidden md:relative w-3/4">
      <ProfileSidebar />
    </div>
  );
}

import Image from "next/image";
import user from "../../assets/user.svg";
export default function ChatProfiile() {
  return (
    <div className="flex flex-row w-full hover:bg-[#3a3e57] p-4 rounded-lg items-center gap-2">
      <Image
        src={user}
        alt="model"
        className="rounded-full w-[3rem] h-[3rem] border border-white "
      />
      <div className="flex flex-col w-3/4 gap-2">
        <div className="flex flex-row justify-between">
          <h4 className="text-sm">Name</h4>
          <p className="text-xs">10:29</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-xs">Thanks for giving me ti..</p>
          <span className="flex justify-center text-xs rounded-full bg-pink-400 h-4 w-4">
            1
          </span>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
export default function ChatProfiile({
  item,
  isClicked,
}: {
  item: any;
  isClicked: boolean;
}) {
  console.log(item);
  return (
    <div
      className={`${
        isClicked ? "bg-[#323131]" : ""
      } flex flex-row w-full  hover:bg-[#494747]  p-4 rounded-xl items-center gap-2`}
    >
      <Image
        src={item.profile_images["2"]}
        alt="model"
        height={48}
        width={48}
        className="rounded-full w-[3rem] h-[3rem] border border-white "
      />
      <div className="flex flex-col w-3/4 gap-2">
        <div className="flex flex-row justify-between">
          <h4 className="text-sm">{item.name}</h4>
          <p className="text-xs">10:29</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-xs">Thanks for giving me ti..</p>
          <span className="flex justify-center text-xs rounded-full bg-[#C62744] h-4 w-4">
            1
          </span>
        </div>
      </div>
    </div>
  );
}

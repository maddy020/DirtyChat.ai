import Image from "next/image";
export default function SideButton({ img, text }: { img: any; text: string }) {
  return (
    <div className="flex flex-col justify-center items-center  md:flex-row md:items-center md:justify-start md:gap-10 cursor-pointer hover:bg-[#3a3e57] md:py-2 w-full  rounded-lg active:bg-[#6E78DA] ">
      <Image src={img} alt="img" />
      <h2 className="">{text}</h2>
    </div>
  );
}

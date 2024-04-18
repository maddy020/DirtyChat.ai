import Image from "next/image";
import bannermodel from "../../assets/bannermodel.svg";
import icon from "../../assets/3d.svg";
import Link from "next/link";
import bannerimage from "../../assets/bannerimage.svg";
import Frame from "../../assets/Frame.svg";
export default function Banner() {
  return (
    <>
      <Image src={bannerimage} alt="" className="relative" />
      <div className="absolute top-36 md:top-48 flex flex-col items-start gap-2 lg:top-64 xl:top-80">
        <Image
          src={Frame}
          alt=""
          className="w-56 md:w-2/3 lg:w-4/5 xl:w-full"
        />
        <Link
          href="/#chat"
          className="bg-[#C62744] text-xs px-3 py-2 cursor-pointer flex justify-center items-center font-semibold md:text-lg 
          md:w-1/3 md:py-4 rounded-full"
        >
          Start Chatting
        </Link>
      </div>
      <Image
        src={icon}
        alt=""
        className="absolute w-16 top-20 left-32 md:top-24 md:left-1/2 md:w-28 lg:top-40 xl:w-48 xl:top-32"
      />
    </>
  );
}

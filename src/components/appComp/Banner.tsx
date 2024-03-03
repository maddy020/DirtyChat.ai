import Image from "next/image";
import landing from "../../assets/landing.svg";
import bannermodel from "../../assets/bannermodel.svg";
export default function Banner() {
  return (
    <>
      <div className="flex  justify-between items-center pl-8 text-white md:justify-around">
        <div className="text-base font-semibold flex flex-col justify-start md:text-3xl">
          <p>Stop Searching</p>
          <p>Start Chatting</p>
        </div>
        <Image src={bannermodel} alt="model" className="md:w-1/3 xl:w-1/6" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <div className="text-3xl pl-10 pt-8 md:text-5xl font-bold md:pl-0">
          <h1>Find Your Dream Girlfriend</h1>
        </div>
        <button className="border-2 border-white  px-2 py-3 w-52 rounded-full md:text-xl hover:bg-[#6E78DA] font-bold md:w-64 ">
          Start Chatting!
        </button>
      </div>
    </>
  );
}

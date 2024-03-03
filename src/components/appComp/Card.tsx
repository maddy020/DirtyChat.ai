import Image from "next/image";
import model from "../../assets/model.svg";
import landing from "../../assets/landing.svg";
export default function Card() {
  return (
    <div className=" rounded-xl shadow-lg overflow-hidden border-2 border-white h-80 md:h-72 lg:w-40 xl:w-72 xl:h-96">
      <div className="relative ">
        <Image className="" src={landing} alt="model" />
        <div className="absolute bottom-8 w-full flex flex-col justify-start gap-2 pl-2 lg:bottom-20 xl:bottom-32">
          <div className="flex flex-row justify-between ">
            <h1 className="text-base font-semibold md:text-base md:font-bold">
              Name
            </h1>
            <h1 className="text-base font-semibold md:text-base md:font-bold">
              Number
            </h1>
          </div>
          <h2 className=" text-base font-semibold md:text-sm md:font-semibold">
            Description
          </h2>
        </div>
      </div>
    </div>
  );
}

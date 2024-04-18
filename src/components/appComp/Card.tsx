import Image from "next/image";
import landing from "../../assets/landing.svg";

type Item = {
  id: number;
  name: string;
  attributes: {
    "Personality Attributes": {
      Personality: string;
      Occupation: string;
      Hobbies: string;
      Relationship: string;
    };
    "Physical Attributes": {
      Body: string;
      Age: string;
      Ethincity: string;
    };
  };
  profile_images: { [key: string]: string };
  system_prompts: {
    description: string;
  };
};
export default function Card({ item }: { item: Item }) {
  return (
    <div className=" rounded-xl shadow-lg overflow-hidden border-2 border-white h-80 md:h-72 lg:w-40 xl:w-72 xl:h-96">
      <div className="relative h-full">
        <Image
          className="object-cover w-full h-full"
          src={item.profile_images["2"] || landing}
          alt="model"
          width={300}
          height={300}
        />
        <div className="absolute bottom-8 w-full flex flex-col justify-start gap-2 pl-2 lg:bottom-20 xl:bottom-10 px-4">
          <div className="flex flex-row justify-between ">
            <h1 className="text-base font-semibold md:text-base md:font-bold">
              {item.name}
            </h1>
            <h1 className="text-base font-semibold md:text-base md:font-bold">
              25
            </h1>
          </div>
          {/* <h2 className=" text-base font-semibold md:text-sm md:font-semibold">
            {item.system_prompts.description}
          </h2> */}
        </div>
      </div>
    </div>
  );
}

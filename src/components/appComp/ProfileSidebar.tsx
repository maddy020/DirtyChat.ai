import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Feature from "./Feature";
import { useState, useEffect } from "react";
import axios from "axios";
export default function ProfileSidebar({
  isProfileOpen,
  modelId,
  setIsProfileOpen,
}: {
  isProfileOpen: boolean;
  modelId: string | null;
  setIsProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  interface SystemPrompts {
    description: String;
  }
  interface Attributes {
    physicalattr: {
      age: Number;
      ethinicity: String;
      color: String;
    };
    personalattr: {
      hobbies: String;
      occupation: String;
      personality: String;
      relationship: String;
    };
  }
  interface modelType {
    name: String;
    attributes: Attributes;
    system_prompts: SystemPrompts;
    profile_images: { [key: string]: string };
  }

  const [model, setModel] = useState<modelType | null>(null);
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  useEffect(() => {
    async function getModel() {
      try {
        const res = await axios.get(`${Base_Url}/user/model/${modelId}`);
        setModel(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getModel();
  }, [modelId, Base_Url]);
  return (
    <>
      {model && (
        <div
          className={
            isProfileOpen
              ? "w-full top-20 right-0  absolute flex flex-col justify-start border-l overflow-y-scroll h-[520px] md:h-[600px] md:w-[250px] xl:h-[700px] xl:w-[350px]  scrollbar-hide  z-10 bg-[#121212]"
              : "w-0  flex flex-col justify-start  overflow-y-scroll max-h-[92vh]  scrollbar-hide right-0 z-10"
          }
        >
          <Carousel>
            <button onClick={() => setIsProfileOpen(false)}>Close</button>
            <CarouselContent className="relative">
              <CarouselItem>
                <Image
                  src={model.profile_images["0"]}
                  alt="model"
                  width={300}
                  height={100}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={model.profile_images["1"]}
                  alt="model"
                  width={500}
                  height={800}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={model.profile_images["2"]}
                  alt="model"
                  width={500}
                  height={800}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 bg-none" />
            <CarouselNext className="absolute top-1/2 right-4" />
          </Carousel>
          <div className="text-white p-4 ">
            <h1 className="text-lg font-bold">{model.name}</h1>
          </div>
          <hr />

          <div className="text-white p-4">
            {Object.entries(model.attributes)
              .reverse()
              .map(([attributeType, attributes]) => {
                return (
                  <>
                    <h1 className="text-lg font-bold">{attributeType}</h1>
                    <div className="grid grid-cols-2 gap-4 pt-4 ">
                      {Object.entries(attributes).map(
                        ([attributeName, attributeValue]) => {
                          return (
                            <>
                              <Feature
                                title={attributeName}
                                subtitle={attributeValue as string}
                              />
                            </>
                          );
                        }
                      )}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

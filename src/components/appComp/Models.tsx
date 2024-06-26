import Card from "./Card";
import { useRouter } from "next/router";
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

export default function Models({ serverData }: { serverData: Array<Item> }) {
  const router = useRouter();
  const handleClick = (id: number) => {
    try {
      router.push(`/chat/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4 md:gap-8 md:py-16 ">
      {serverData.map((item, id) => {
        return (
          <div
            key={id}
            className="cursor-pointer"
            onClick={() => handleClick(item.id)}
          >
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
}

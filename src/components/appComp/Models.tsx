import Card from "./Card";
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
  return (
    <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4 md:gap-8 md:py-16">
      <Card item={serverData[0]} />

      <Card item={serverData[0]} />

      <Card item={serverData[0]} />

      <Card item={serverData[0]} />

      <div className="hidden md:block">
        <Card item={serverData[0]} />
      </div>
      <div className="hidden md:block">
        <Card item={serverData[0]} />
      </div>
      <div className="hidden md:block">
        <Card item={serverData[0]} />
      </div>
      <div className="hidden md:block">
        <Card item={serverData[0]} />
      </div>
    </div>
  );
}

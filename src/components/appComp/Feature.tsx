import Image from "next/image";
import i1 from "../../assets/love.svg";
export default function Feature() {
  return (
    <div className="flex">
      <Image src={i1} alt="ftr" />
      <div className="flex flex-col justify-start gap-1">
        <h1>Feature</h1>
        <p className="text-xs">Energetic and Joyful</p>
      </div>
    </div>
  );
}

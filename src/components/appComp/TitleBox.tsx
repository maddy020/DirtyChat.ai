import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
export default function TitleBox({ img }: { img: StaticImport | string }) {
  return (
    <div className="flex items-center pt-2 text-xl justify-center font-semibold md:text-4xl md:font-bold ">
      <Image src={img} alt="" />
    </div>
  );
}

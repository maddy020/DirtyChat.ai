import Link from "next/link";

interface bwprops {
  txt: string;
  link: string;
}

export default function BottomWarning(props: bwprops) {
  return (
    <div className="flex flex-row justify-center w-full">
      <p className="text-xs">{props.txt}</p>
      <Link href="/" className="text-xs text-[#F6883D] font-semibold ">
        {props.link}
      </Link>
    </div>
  );
}

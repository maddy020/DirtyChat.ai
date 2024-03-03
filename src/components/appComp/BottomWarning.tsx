import Link from "next/link";

interface bwprops {
  txt: string;
  link: string;
}

export default function BottomWarning(props: bwprops) {
  return (
    <div className="flex flex-row justify-center w-full">
      <p className="text-xs">{props.txt}</p>
      <Link href="/chat" className="text-xs text-[#6E78DA] ">
        {props.link}
      </Link>
    </div>
  );
}

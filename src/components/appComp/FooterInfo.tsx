interface FooterInfoProps {
  head: string;
  p1: string;
  p2: string;
}
export default function FooterInfo(props: FooterInfoProps) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <h1 className="text-lg text-[#6E78DA] font-bold md:text-2xl xl:text-2xl">
        {props.head}
      </h1>
      <div className="text-sm md:text-base font-semibold flex flex-col justify-start gap-2 xl:text-xl">
        <p>{props.p1}</p>
        <p>{props.p2}</p>
      </div>
    </div>
  );
}

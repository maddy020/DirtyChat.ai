interface TitleBoxProps {
  text: string;
}
export default function TitleBox(props: TitleBoxProps) {
  return (
    <div className="flex items-center text-xl justify-center font-semibold md:text-4xl md:font-bold ">
      <h1 className="">{props.text}</h1>
    </div>
  );
}

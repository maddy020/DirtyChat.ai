interface Hprops {
  title: string;
  subtitle: string;
}

export default function Heading(props: Hprops) {
  return (
    <div className="flex flex-col items items-center pt-10 text-black">
      <h1 className="text-xl font-bold">{props.title}</h1>
      <p className="text-sm">{props.subtitle}</p>
    </div>
  );
}

interface Iprops {
  type: string;
  placevalue: string;
  value?: string;
  vref: any;
}

export default function InputBox(props: Iprops) {
  return (
    <>
      <input
        type={props.type}
        defaultValue={props.value}
        placeholder={props.placevalue}
        className="p-2 w-full rounded-full border text-black"
        required
        ref={props.vref}
      />
    </>
  );
}

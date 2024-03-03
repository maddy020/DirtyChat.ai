interface Iprops {
  type: string;
  placevalue: string;
  onChange: (value: string) => void;
}

export default function InputBox(props: Iprops) {
  const handleChange = (value: string) => {
    props.onChange(value);
  };

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placevalue}
        className="p-2 w-full rounded-lg border text-black"
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

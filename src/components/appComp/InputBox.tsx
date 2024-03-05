interface Iprops {
  type: string;
  placevalue: string;
  value: string;
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
        value={props.value}
        placeholder={props.placevalue}
        className="p-2 w-full rounded-full border text-black"
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

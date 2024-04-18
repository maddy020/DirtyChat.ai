interface Iprops {
  type: string;
  placevalue: string;
  value?: string;
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
        defaultValue={props.value}
        placeholder={props.placevalue}
        className="border-2 border-gray-400 focus:border-[#F6883D] focus:outline-none px-4 py-2 rounded-full w-full"
        onChange={(e) => handleChange(e.target.value)}
        required
      />
    </>
  );
}

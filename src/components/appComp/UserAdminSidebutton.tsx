import Image from "next/image";
export default function UserAdminSidebutton({
  img,
  text,
  href,
  isActive,
  isOpen,
}: {
  img: any;
  text: string;
  href: string;
  isActive: boolean;
  isOpen: boolean;
}) {
  return (
    <button>
      <a
        href={href}
        className={`${
          isActive ? "bg-[#C62744]" : ""
        } flex flex-col justify-center items-center  md:flex-row md:items-center ${
          isOpen ? "md:justify-start px-2" : "md:justify-center"
        } md:gap-2 cursor-pointer w-full rounded-xl  py-2 `}
      >
        <Image src={img} alt="img" />
        <h2 className={` ${isOpen ? "" : "hidden"}`}>{text}</h2>
      </a>
    </button>
  );
}

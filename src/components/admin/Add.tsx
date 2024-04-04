import Modal from "react-modal";
import { useRef, useState } from "react";
import adminplus from "../../assets/adminplus.svg";
import Input from "./Input";
import Image from "next/image";
import edit from "../../assets/edit.svg";
import axios from "axios";
import { useSession } from "next-auth/react";

type Item = {
  id: number;
  name: string;
  attributes: {
    "Personality Attributes": {
      Personality: string;
      Occupation: string;
      Hobbies: string;
      Relationship: string;
    };
    "Physical Attributes": {
      Body: string;
      Age: string;
      Ethincity: string;
    };
  };
  profile_images: object;
  system_prompts: {
    description: string;
  };
};

type dataType = {
  expires: string;
  token: string;
  user: {
    name: string;
    email: string;
  };
};
export default function Add({
  item,
  Data,
  setData,
}: {
  item: Item | null;
  Data: Array<Item>;
  setData: any;
}) {
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const [modalisOpen, setModalIsOpen] = useState(false);
  const nameref = useRef<HTMLInputElement>(null);
  const personalityref = useRef<HTMLInputElement>(null);
  const occupationref = useRef<HTMLInputElement>(null);
  const hobbiesref = useRef<HTMLInputElement>(null);
  const relationshipref = useRef<HTMLInputElement>(null);
  const bodyref = useRef<HTMLInputElement>(null);
  const ageref = useRef<HTMLInputElement>(null);
  const ethincityref = useRef<HTMLInputElement>(null);
  const descriptionref = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<(File | null)[]>([]);
  const { data: session, status } = useSession();
  console.log(session);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files;
    if (!images) return alert("No images selected");
    if (images && images.length && images?.length > 3) {
      return alert("You can only upload 3 images");
    }
    setFiles(Array.from(images));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      if (files.length !== 3) return alert("You can only upload 3 images");
      const formData = new FormData();
      const data = {
        name: nameref.current?.value,
        attributes: {
          "Personality Attributes": {
            Personality: personalityref.current?.value,
            Occupation: occupationref.current?.value,
            Hobbies: hobbiesref.current?.value,
            Relationship: relationshipref.current?.value,
          },
          "Physical Attributes": {
            Body: bodyref.current?.value,
            Age: ageref.current?.value,
            Ethincity: ethincityref.current?.value,
          },
        },
        description: descriptionref.current?.value,
      };
      formData.append("data", JSON.stringify(data));
      files.forEach((file) => {
        if (file) {
          formData.append("files", file);
        }
      });

      const result = await axios.post(`${Base_Url}/admin/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${session?.supabaseAccessToken}`,
        },
      });
      if (Data.length === 0) setData([result.data.data]);
      setData([...Data, result.data.data]);
      console.log(result.data.data.profile_images["0"]);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteModal = async () => {
    try {
      await axios.delete(`${Base_Url}/admin/delete/${item?.id}`, {
        headers: {
          Authorization: `Bearer ${session?.supabaseAccessToken}`,
        },
      });
      setData(Data.filter((data) => data.id !== item?.id));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {item === null ? (
        <div
          className="text-sm p-2 pl-6 cursor-pointer pr-6 flex gap-2 rounded-full hover:bg-[#3a3e57]"
          onClick={openModal}
        >
          <h1 className="font-semibold text-lg">Add Character</h1>
          <Image src={adminplus} alt="add" />
        </div>
      ) : (
        <Image
          src={edit}
          width={30}
          height={30}
          alt="edit"
          onClick={openModal}
          className="cursor-pointer"
        />
      )}
      <Modal
        isOpen={modalisOpen}
        onRequestClose={closeModal}
        className="modal_add"
        overlayClassName="overlay"
      >
        <form
          className="text-black py-6 px-10 font-semibold text-sm flex flex-col gap-4"
          onSubmit={handleClick}
        >
          <h1 className="text-black text-2xl">Add Character</h1>
          <div className="w-1/2">
            <label htmlFor="">Name</label>
            <Input
              type="text"
              placevalue=""
              vref={nameref}
              value={item?.name}
            />
          </div>
          <div>
            <h1>Personality Attributes</h1>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <label htmlFor="">Personality</label>
                <Input
                  type="text"
                  placevalue=""
                  vref={personalityref}
                  value={
                    item?.attributes?.["Personality Attributes"]?.Personality
                  }
                />
              </div>
              <div>
                <label htmlFor="">Occupation</label>
                <Input
                  type="text"
                  placevalue=""
                  vref={occupationref}
                  value={
                    item?.attributes?.["Personality Attributes"]?.Occupation
                  }
                />
              </div>
              <div>
                <label htmlFor="">Hobbies</label>
                <Input
                  type="text"
                  placevalue=""
                  vref={hobbiesref}
                  value={item?.attributes?.["Personality Attributes"]?.Hobbies}
                />
              </div>
              <div>
                <label htmlFor="">Relationship</label>
                <Input
                  type="text"
                  placevalue=""
                  vref={relationshipref}
                  value={
                    item?.attributes?.["Personality Attributes"]?.Relationship
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <h1>Physical Attributes</h1>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <label htmlFor="">Body</label>
                <Input
                  type="text"
                  placevalue=""
                  vref={bodyref}
                  value={item?.attributes?.["Physical Attributes"]?.Body}
                />
              </div>
              <div>
                <label htmlFor="">Age</label>
                <Input
                  type="text"
                  placevalue=""
                  vref={ageref}
                  value={item?.attributes?.["Physical Attributes"]?.Age}
                />
              </div>
              <div>
                <label htmlFor="">Ethincity</label>
                <Input
                  type="text"
                  placevalue=""
                  vref={ethincityref}
                  value={item?.attributes?.["Physical Attributes"]?.Ethincity}
                />
              </div>
            </div>
            <div></div>
            <div>
              <label htmlFor="">Description</label>
              <Input
                type="text"
                placevalue=""
                vref={descriptionref}
                value={item?.system_prompts?.description}
              />
            </div>
          </div>
          <div>
            <h1>Gallery</h1>
            <div className="pt-2 flex justify-between">
              <h1>Upload Images</h1>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="p-0"
              />
            </div>
            <div className="flex justify-between pt-4">
              <button
                onClick={closeModal}
                className="bg-[#C62744] py-2 px-10 rounded-3xl text-white w-1/3"
              >
                Cancel
              </button>
              {item === null ? (
                <button
                  type="submit"
                  className="bg-[#C62744] py-2 px-10 rounded-3xl text-white w-1/3"
                >
                  Save
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#C62744] py-2 px-10 rounded-3xl text-white w-1/3"
                >
                  Update
                </button>
              )}
              {item !== null && (
                <button
                  type="button"
                  onClick={deleteModal}
                  className="bg-[#C62744] py-2 px-10 rounded-3xl text-white w-1/4"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

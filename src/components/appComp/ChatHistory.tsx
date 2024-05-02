import Image from "next/image";
import user from "../../assets/user.svg";
import ChatInput from "./ChatInput";
import arrow from "../../assets/arrow.svg";
import delet from "../../assets/delete.svg";
import MessageBox from "./MessageBox";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
export default function ChatHistory({
  handleState,
  modelId,
  setToken,
}: {
  handleState: () => void;
  modelId: string | null;
  setToken: React.Dispatch<React.SetStateAction<number>>;
}) {
  interface modelType {
    name: string;
    profile_images: { [key: string]: string };
  }
  const router = useRouter();
  const userId = localStorage.getItem("currUser")?.slice(1);
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [model, setModel] = useState<modelType | null>(null);

  useEffect(() => {
    async function getModel() {
      try {
        const res = await axios.get(`${Base_Url}/user/model/${modelId}`, {
          withCredentials: true,
        });
        setModel(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getModel();
  }, [modelId, Base_Url]);

  useEffect(() => {
    async function getMessages() {
      try {
        if (userId === null || userId === undefined)
          return alert("Please login to continue");
        const uId = userId;

        const res = await axios.get(
          `${Base_Url}/user/getMessages/${uId}/${modelId}`,
          {
            withCredentials: true,
          }
        );
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (modelId !== null) {
      getMessages();
    }
  }, [modelId, Base_Url, userId]);

  const handleClick = () => {
    handleState();
  };

  const handleDeleteAlert = async () => {
    try {
      if (userId === null || userId === undefined)
        return alert("Please login to continue");
      const uId = userId;
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        await axios.delete(`${Base_Url}/user/${uId}/deleteChat/${modelId}`, {
          withCredentials: true,
        });
        setMessages([]);
        await Swal.fire({
          title: "Deleted!",
          text: "Your chat has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error in deleting the chat of the user", error);
    }
  };

  return (
    <>
      <div className="flex  items-center justify-between">
        <div className="flex justify-between items-center">
          <button
            className="block md:hidden"
            onClick={() => router.push("/chat")}
          >
            <Image src={arrow} alt="back" className="rotate-180" />
          </button>
          <Image
            src={model?.profile_images["2"] ?? user}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          {model && <h1>{model.name}</h1>}
        </div>
        <div className="flex ">
          <button disabled={messages.length == 0}>
            <Image
              src={delet}
              alt="delete"
              className="cursor-pointer"
              onClick={handleDeleteAlert}
            />
          </button>
          <Image
            src={arrow}
            alt="arrow"
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
      <MessageBox messages={messages} isTyping={isTyping} />

      <ChatInput
        setMessages={setMessages}
        setIsTyping={setIsTyping}
        isTyping={isTyping}
        modelId={modelId}
      />
    </>
  );
}

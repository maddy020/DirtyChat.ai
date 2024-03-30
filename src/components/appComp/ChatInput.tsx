import InputBox from "./InputBox";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import plus from "../../assets/plus.svg";
import send from "../../assets/send.svg";

export default function ChatInput({
  setMessages,
  setIsTyping,
  isTyping,
  modelId,
}: {
  setMessages: any;
  setIsTyping: any;
  isTyping: boolean;
  modelId: number | null;
}) {
  const [messageInput, setMessageInput] = useState("");

  const userId = localStorage.getItem("currUser")?.slice(1);
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const handleMessage = (value: string) => {
    setMessageInput(value);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("entered");
    if (userId === null || userId === undefined)
      return alert("Please login to continue");
    const uId = userId;
    try {
      if (messageInput.trim() === "") return;
      setIsTyping(true);
      setMessages((prev: any) => [
        ...prev,
        { role: "user", content: messageInput },
      ]);
      const data = {
        message_text: {
          role: "user",
          content: messageInput,
        },
        max_tokens: 512,
        userId: uId,
        modelId: modelId,
      };
      setMessageInput("");
      const res = await axios.post(`${Base_Url}/user/store`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res);
      setMessages((prev: any) => [
        ...prev,
        {
          role: "assistant",
          content: res.data.message,
        },
      ]);
      setIsTyping(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="px-4 bottom-24 text-black flex md:px-10 absolute md:bottom-4 w-full"
      onSubmit={handleClick}
    >
      <Image src={plus} alt="plus" className="cursor-pointer" />
      <InputBox
        type="text"
        value={messageInput}
        placevalue="Enter your Message"
        onChange={handleMessage}
      />
      <button className="" type="submit">
        <Image src={send} alt="send" className="cursor-pointer"></Image>
      </button>
    </form>
  );
}

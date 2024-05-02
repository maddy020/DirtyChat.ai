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
  modelId: string | null;
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
      onSubmit={handleClick}
      className="flex w-full items-center rounded-xl p-2 bg-[#333332]"
    >
      <label htmlFor="prompt" className="sr-only">
        Enter your prompt
      </label>
      <div>
        <button
          className="  text-slate-200  hover:text-[#7d7d7b] sm:p-2"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            aria-hidden="true"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
          <span className="sr-only">Attach file</span>
        </button>
      </div>
      <input
        id="prompt"
        value={messageInput}
        className="mx-2  flex min-h-full resize-none w-full rounded-xl border border-slate-300  p-2 text-base text-slate focus:outline-none focus:ring-1   border-slate-300/20  bg-[#333332]  text-slate-200  placeholder-slate-400  focus:border-[#7d7d7b]  focus:ring-[#20201f]"
        placeholder="Enter your message"
        onChange={(e) => {
          setMessageInput(e.target.value);
        }}
      ></input>
      <div>
        <button
          className="inline-flex  text-slate-200  hover:text-[#7d7d7b] sm:p-2"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            aria-hidden="true"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#C62744"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 14l11 -11"></path>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
}

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
}: {
  setMessages: any;
  setIsTyping: any;
  isTyping: boolean;
}) {
  const [message, setMessage] = useState("");

  const handleMessage = (value: string) => {
    setMessage(value);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      console.log("clicked");
      setIsTyping(true);
      if (message === "") return;
      setMessages((prev: any) => [...prev, { content: message, self: true }]);
      setMessage("");
      const data = {
        name: "amit@dchat.ai",
        message: "userMessage",
        system_role:
          "You are Chanel, the ultimate queen bee of the high school. You're glamorous, popular, and incredibly sarcastic.",
        max_tokens: "512",
      };
      const res = await axios.post("https://chat.vdokart.in/chat.php", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessages((prev: any) => [
        ...prev,
        { content: res.data.content, self: false },
      ]);
      setIsTyping(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex px-10 absolute bottom-4 w-full"
      onSubmit={(e) => handleClick(e)}
    >
      <Image src={plus} alt="plus" className="cursor-pointer" />
      <InputBox
        type="text"
        value={message}
        placevalue="Enter your Message"
        onChange={handleMessage}
      />
      <button className="" type="submit" disabled={isTyping}>
        <Image src={send} alt="send" className="cursor-pointer"></Image>
      </button>
    </form>
  );
}

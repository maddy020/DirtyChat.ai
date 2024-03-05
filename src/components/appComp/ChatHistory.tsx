import Image from "next/image";
import user from "../../assets/user.svg";
import ChatInput from "./ChatInput";
import arrow from "../../assets/arrow.svg";
import MessageBox from "./MessageBox";
import { useState } from "react";
export default function ChatHistory({
  handleState,
}: {
  handleState: () => void;
}) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleClick = () => {
    handleState();
  };

  return (
    <div className="w-full">
      <div className="flex pt-8 items-center pl-10 justify-between">
        <div className="flex gap-8">
          <Image src={user} alt="avatar" />
          <h1>Emily</h1>
        </div>
        <>
          <Image
            src={arrow}
            alt="arrow"
            className="cursor-pointer"
            onClick={handleClick}
          />
        </>
      </div>
      <MessageBox messages={messages} isTyping={isTyping} />
      <ChatInput
        setMessages={setMessages}
        setIsTyping={setIsTyping}
        isTyping={isTyping}
      />
    </div>
  );
}

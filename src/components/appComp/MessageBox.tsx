import { useEffect, useRef } from "react";

interface MyObject {
  content: string;
  role: string;
}

export default function MessageBox({
  messages,
  isTyping,
}: {
  messages: MyObject[];
  isTyping: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <div
      className=" h-full flex flex-col gap-10 md:px-10 overflow-scroll scrollbar-hide"
      ref={scrollRef}
    >
      {messages.map((msg, ind) =>
        msg.role === "user" ? (
          <div className="w-full" key={ind}>
            <div className="flex justify-end">
              <span className="bg-[#333332] px-4 py-2 rounded-xl w-1/2 break-words md:w-1/6">
                {msg.content}
              </span>
            </div>
            {ind === messages.length - 1 && isTyping && (
              <div className="w-full flex justify-start">
                <p className="bg-[#C62744] px-4 py-2 rounded-xl">Typing..</p>
              </div>
            )}
          </div>
        ) : (
          <div key={ind} className="flex justify-start ">
            <p className="w-1/2 break-words bg-[#C62744] px-8 py-4 rounded-xl md:w-1/3 ">
              {msg.content}
            </p>
          </div>
        )
      )}
    </div>
  );
}

import { useEffect, useRef } from "react";

interface MyObject {
  content: string;
  self: boolean;
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
    }
  }, [messages, isTyping]);

  return (
    <div
      className="max-h-[33rem] flex flex-col gap-10 px-10 overflow-scroll scrollbar-hide"
      ref={scrollRef}
    >
      {messages.map((msg, ind) =>
        msg.self ? (
          <div className="w-full" key={ind}>
            <div className="w-full flex justify-end">
              <span className="bg-[#6E78DA] px-4 py-2 rounded-xl">
                {msg.content}
              </span>
            </div>
            {ind === messages.length - 1 && isTyping && (
              <div className="w-full flex justify-start">
                <p className="bg-[#6E78DA] px-4 py-2 rounded-xl">Typing..</p>
              </div>
            )}
          </div>
        ) : (
          <div key={ind} className="w-full flex justify-start ">
            <p className="w-96 bg-[#6E78DA] px-8 py-4 rounded-xl">
              {msg.content}
            </p>
          </div>
        )
      )}
    </div>
  );
}

import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";
import Sad from "../../assets/Sad.svg";
import { useState } from "react";
import RequestModal from "./requestModal";
export default function TokenModal({ token }: { token: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {token <= 0 && (
        <>
          <Modal
            isOpen={true}
            className="w-4/5 h-2/3 bg-white text-black rounded-3xl md:h-1/2 md:w-96"
            overlayClassName="overlay"
          >
            <div className="flex flex-col justify-evenly items-center p-2">
              <Image src={Sad} alt="sad" />
              <h1 className="font-bold text-xl text-orange-500">UH OH</h1>
              <div className="px-4">
                <p>Looks like your 50 tokens have been used up</p>
                <p>Take a moment to earn more by completing a survey.</p>
              </div>
            </div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </Modal>
        </>
      )}
    </>
  );
}

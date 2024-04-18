import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";
import Sad from "../../assets/Sad.svg";
export default function TokenModal({ token }: { token: number | null }) {
  return (
    <>
      {token === 0 && (
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
            <div className="flex flex-col px-8 pt-8 gap-3 justify-between">
              <button className="bg-gradient-to-r from-orange-400 to-red-600 px-5 rounded-full py-2 w-full text-white font-semibold">
                <Link href="/requesttoken">Fill this survey form</Link>
              </button>
            </div>
          </Modal>
        </>
      )}
    </>
  );
}

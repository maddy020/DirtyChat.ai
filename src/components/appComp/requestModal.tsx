import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";
import Sad from "../../assets/Sad.svg";
import InputBox from "./InputBox";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
export default function RequestModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<number>(0);

  useEffect(() => {
    async function gettoken() {
      try {
        const userId = localStorage.getItem("currUser")?.slice(1);
        if (userId === null || userId === undefined)
          return toast.info("Please login to continue");
        const uId = userId;
        const res = await axios.get(`${Base_Url}/user/getToken/${uId}`, {
          withCredentials: true,
        });
        setUserId(uId);
        setToken(res.data.token);
      } catch (error) {
        console.log(error);
      }
    }
    gettoken();
  }, [userId, token, Base_Url]);

  const handleRequest = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const api_data = {
        currtoken: token,
        tokenreq: parseInt(e.target[0].value),
      };
      if (api_data.tokenreq > 200)
        return toast.error("You can request maximum 200 tokens at a time");
      const res = await axios.post(
        `${Base_Url}/user/requestToken/${userId}`,
        api_data,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Error in submitting request");
    }
  };

  return (
    <>
      <button
        className="bg-gradient-to-r from-orange-400 to-red-600 px-5 rounded-full py-2 w-full text-white font-semibold"
        onClick={handleRequest}
      >
        Fill this survey form
      </button>
      <Modal
        isOpen={isOpen}
        className="w-4/5 h-2/3 bg-white text-black rounded-3xl md:h-1/2 md:w-96"
        overlayClassName="overlay"
      >
        <form
          className="flex flex-col px-8 pt-8 gap-3 justify-between"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-evenly items-center p-2">
            <Image src={Sad} alt="sad" />
            <h1 className="font-bold text-xl text-orange-500">Request Token</h1>
            <InputBox
              type="number"
              placevalue="Enter the number of tokens"
              onChange={() => null}
            />
          </div>
          <div className="flex flex-col px-8 pt-8 gap-3 justify-between">
            <button
              className="bg-gradient-to-r from-orange-400 to-red-600 px-5 rounded-full py-2 w-full text-white font-semibold"
              type="submit"
            >
              Submit the Request
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

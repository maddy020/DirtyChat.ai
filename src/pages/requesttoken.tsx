import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import UserSidebar from "@/components/appComp/UserSidebar";
import UserNavbar from "@/components/appComp/UserNavbar";
import InputBox from "@/components/appComp/InputBox";
import { toast } from "react-toastify";
export default function RequestToken() {
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<number>(0);

  useEffect(() => {
    async function gettoken() {
      try {
        const userId = localStorage.getItem("currUser")?.slice(1);
        if (userId === null || userId === undefined)
          return alert("Please login to continue");
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
    } catch (error) {
      console.log(error);
      toast.error("Error in submitting request");
    }
  };

  return (
    <>
      <UserNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <UserSidebar isOpen={isOpen} token={0} />
      <main className="w-full px-5 mt-20">
        <form
          method="POST"
          className="md:pl-[130px] text-black  md:h-full md:flex md:flex-col md:justify-start"
          onSubmit={handleSubmit}
        >
          <InputBox
            type="number"
            value=""
            placevalue="Enter the number of tokens you want"
            onChange={() => console.log("changed")}
          />
          <label htmlFor="" className="font-semibold text-white">
            Current Tokens
          </label>
          <InputBox
            type="number"
            value={token.toString()}
            placevalue=""
            onChange={() => console.log("changed")}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-red-600 px-5 rounded-full py-2 w-full text-white font-semibold"
          >
            Submit Request
          </button>
        </form>
      </main>
    </>
  );
}

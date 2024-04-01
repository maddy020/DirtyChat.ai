import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import Link from "next/link";
import { useRouter } from "next/router";
import BottomWarning from "./BottomWarning";
import { createClient } from "../../../utils/supabase/component";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function LoginModal({
  loader,
  setLoader,
  setcurruser,
}: {
  loader: boolean;
  setcurruser: React.Dispatch<React.SetStateAction<string | null>>;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [modalisOpen, setModalIsOpen] = useState(false);

  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const supabase = createClient();
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };
  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const logIn = async () => {
    setLoader(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        return;
      }
      const res = await axios.post(
        `${Base_Url}/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("currUser", `U${res.data.message}`);
      setLoader(false);
      setcurruser(res.data.message);
      toast.success("Logged in successfully");
    } catch (error: any) {
      toast.error(error);
      console.log("Error", error.response.data.message);
    }
  };

  return (
    <>
      <button
        className="text-sm p-2 pl-6 pr-6 rounded-full border border-1 border-white"
        onClick={openModal}
      >
        Log In
      </button>
      <Modal
        isOpen={modalisOpen}
        onRequestClose={closeModal}
        className="w-4/5 h-2/3 bg-white rounded-3xl md:h-3/4 md:w-96"
        overlayClassName="overlay"
      >
        <Heading title="Welcome Back!" subtitle="Log in to your account" />

        <div className="flex flex-col px-8 pt-8 gap-3 justify-between text-black">
          <InputBox
            type="text"
            placevalue="Enter email address"
            onChange={handleEmail}
          />
          <InputBox
            type="password"
            placevalue="Enter password"
            onChange={handlePassword}
          />
          <div className="flex justify-end pt-2">
            <Link href="/" className="text-xs text-[#F6883D] font-semibold">
              Forgot Password?
            </Link>
          </div>
          <button
            onClick={logIn}
            className="bg-gradient-to-r from-orange-400 to-red-600 px-5 rounded-full py-2 w-full text-white font-semibold"
          >
            Log in
          </button>
          <BottomWarning txt="Don't have any account?" link="Signup" />
          {loader && <p>Please wait while you are getting logged in....</p>}
        </div>
      </Modal>
    </>
  );
}

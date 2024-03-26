import Modal from "react-modal";
import { useState } from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import Link from "next/link";
import { useRouter } from "next/router";
import BottomWarning from "./BottomWarning";
import { Switch } from "@/components/ui/switch";
import axios from "axios";

export default function LoginModal() {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const router = useRouter();
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };
  const handlePassword = (value: string) => {
    setPassword(value);
  };
  const handleChange = () => {
    setIsAdmin(!isAdmin);
  };

  const logIn = async () => {
    try {
      const user = {
        email,
        password,
        isAdmin,
      };
      const res = await axios.post(`${Base_Url}/auth/login`, user, {
        withCredentials: true,
      });
      if (res.data == "Invalid Credentials")
        return alert("Invalid Credentials");
      console.log(res.data);
      localStorage.setItem(
        "currUser",
        isAdmin ? `A${res.data.message}` : `U${res.data.message}`
      );
      router.reload();
    } catch (error) {
      console.log("Error", error);
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
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="airplane-mode"
                checked={isAdmin}
                onCheckedChange={handleChange}
              />
              <label htmlFor="airplane-mode" className="text-xs text-black">
                Admin?
              </label>
            </div>
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
        </div>
      </Modal>
    </>
  );
}

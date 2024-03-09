import Modal from "react-modal";
import { useState } from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import { useRouter } from "next/router";
import BottomWarning from "./BottomWarning";
import axios from "axios";

export default function SignupModal() {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleName = (value: string) => {
    setName(value);
  };
  const handleEmail = (value: string) => {
    setEmail(value);
  };
  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const signin = async () => {
    try {
      const user = {
        email,
        password,
      };
      await axios.post("http://localhost:3000/api/auth/signup", user, {
        withCredentials: true,
      });
      localStorage.setItem("currUser", name);
      router.reload();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <>
      <button
        className="px-4 py-2 text-sm md:py-2 md:px-6 rounded-full bg-[#6E78DA]"
        onClick={openModal}
      >
        Sign Up
      </button>
      <Modal
        isOpen={modalisOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <Heading title="Welcome" subtitle="Create your new account" />
        <div className="flex flex-col px-8 pt-8 gap-3 justify-between">
          <InputBox
            type="text"
            placevalue="Enter Your Name"
            onChange={handleName}
          />
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
          <InputBox
            type="password"
            placevalue="Confirm Password"
            onChange={handlePassword}
          />
          <button
            onClick={signin}
            className="bg-[#6E78DA] px-5 rounded-full py-2 w-full text-white font-semibold"
          >
            Sign Up
          </button>
          <BottomWarning txt="Already have any account?" link="Log In" />
        </div>
      </Modal>
    </>
  );
}

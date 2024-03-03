import Modal from "react-modal";
import { useState } from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import Link from "next/link";
import { useRouter } from "next/router";
import BottomWarning from "./BottomWarning";
import { createClient } from "../../../utils/supabase/component";
export default function LoginModal() {
  const [modalisOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };
  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const logIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
    }
    router.reload();
  };

  return (
    <>
      <button
        className="text-sm p-2 pl-6 pr-6 rounded-full border border-1 border-white 
        hover:bg-[#3a3e57]"
        onClick={openModal}
      >
        Log In
      </button>
      <Modal
        isOpen={modalisOpen}
        onRequestClose={closeModal}
        className="modal"
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
            <Link href="/" className="text-xs text-[#6E78DA] font-semibold">
              Forgot Password?
            </Link>
          </div>
          <button
            onClick={logIn}
            className="bg-[#6E78DA] px-5 rounded-full py-2 w-full text-white font-semibold"
          >
            Log in
          </button>
          <BottomWarning txt="Don't have any account?" link="Signup" />
        </div>
      </Modal>
    </>
  );
}

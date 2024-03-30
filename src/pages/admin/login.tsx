import axios from "axios";
import { useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Login = () => {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const router = useRouter();

  return (
    <div className="w-full h-[100vh] bg-gray-100 flex  items-center justify-center  text-black">
      <div className="bg-white p-7 flex flex-col items-center w-80 shadow-lg rounded-lg ">
        <div className="flex flex-col justify-center  items-center ">
          <h1 className="font-bold text-xl">Sign in</h1>
          <h2 className="text-slate-500 text-md pt-1 px-4 pb-4 font-medium ">
            Enter your credentials to access your account
          </h2>
        </div>
        <form>
          <label htmlFor="">Email</label>
          <input
            ref={emailref}
            type="text"
            placeholder="johndoe@gmail.com"
            required
            className="p-3 border w-full rounded-lg"
          />
          <label htmlFor="">Password</label>
          <input
            ref={passwordref}
            type="password"
            placeholder="********"
            required
            className="p-3 border w-full rounded-lg"
          />
          <button
            onClick={() => signIn()}
            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import InputBox from "./InputBox";
import { useState } from "react";
import axios from "axios";
export default function ModelResponse() {
  const [message, setMessage] = useState("");
  const handleMessage = (value: string) => {
    setMessage(value);
  };
  const handleClick = async () => {
    try {
      console.log("clicked");
      const data = {
        name: "amit@dchat.ai",
        message: "userMessage",
        system_role:
          "You are Chanel, the ultimate queen bee of the high school. You're glamorous, popular, and incredibly sarcastic. Your words drip with condescension, and you have a knack for delivering scathing remarks with a sweet smile. You're always accompanied by your clique of loyal followers who hang on your every word. Your tone is dismissive, your insults are cutting, and your wit is razor-sharp. Your goal? To maintain your status as the most feared and envied girl in school..",
        max_tokens: "512",
      };
      const res = await axios.post("https://chat.vdokart.in/chat.php", data, {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <InputBox
        type="text"
        placevalue="Enter your Message"
        onChange={handleMessage}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  // name: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      return res.json({
        message:
          "Hi there ! I am your AI model.Can you give me some more detailed information regarding your profile ",
      });
    } catch (error) {
      return res
        .status(411)
        .json({ message: "Error in giving response! Try reloading the page" });
    }
  } else {
    return res.json({ message: "Only Post request allowed" });
  }
}

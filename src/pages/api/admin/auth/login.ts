// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import createClient from "../../../../../utils/supabase/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createClient(req, res);

  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      if (email !== "tom@gmail.com" || password !== "hellotom")
        return res.status(404).json({ message: "No admin found" });
      return res.status(200).json({ message: "Login As Admin Successfull" });
    } catch (error) {
      return res.status(411).json({ message: "Admin unauthorized" });
    }
  } else {
    return res.json({ message: "Only Post request allowed" });
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import createClient from "../../../../utils/supabase/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createClient(req, res);

  if (req.method === "POST") {
    try {
      await supabase.auth.signOut();
      return res.status(200).json({ message: "Logout Successfull" });
    } catch (error) {
      return res.status(411).json({ message: "Logout Error" });
    }
  } else {
    return res.json({ message: "Only Post request allowed" });
  }
}

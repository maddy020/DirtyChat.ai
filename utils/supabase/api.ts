import {
  createServerClient,
  type CookieOptions,
  serialize,
} from "@supabase/ssr";
import { type NextApiRequest, type NextApiResponse } from "next";

export default function createClient(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createServerClient(
    "https://jsjoswfatcvghzacmiqj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impzam9zd2ZhdGN2Z2h6YWNtaXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzMTQ0MTIsImV4cCI6MjAyNDg5MDQxMn0.B9rmmcXVjTvnsPruN_AmKgxIuXTLN2RXRRrjUf5twr8",
    {
      cookies: {
        get(name: string) {
          return req.cookies[name];
        },
        set(name: string, value: string, options: CookieOptions) {
          res.appendHeader("Set-Cookie", serialize(name, value, options));
        },
        remove(name: string, options: CookieOptions) {
          res.appendHeader("Set-Cookie", serialize(name, "", options));
        },
      },
    }
  );

  return supabase;
}

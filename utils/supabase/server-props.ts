import {
  createServerClient,
  type CookieOptions,
  serialize,
} from "@supabase/ssr";
import { type GetServerSidePropsContext } from "next";

export function createClient(context: GetServerSidePropsContext) {
  const supabase = createServerClient(
    "https://supabase.dirtychat.ai",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzA4NzEzMDAwLAogICJleHAiOiAxODY2NTY1ODAwCn0.ZuLdBR1TRM_FUK6xmvgd7PvxwmJWC6lDLhW_ec7gSSg",
    {
      cookies: {
        get(name: string) {
          return context.req.cookies[name];
        },
        set(name: string, value: string, options: CookieOptions) {
          context.res.appendHeader(
            "Set-Cookie",
            serialize(name, value, options)
          );
        },
        remove(name: string, options: CookieOptions) {
          context.res.appendHeader("Set-Cookie", serialize(name, "", options));
        },
      },
    }
  );

  return supabase;
}

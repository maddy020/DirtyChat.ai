import { createClient as createClientPrimitive } from "@supabase/supabase-js";

export function createClient() {
  const supabase = createClientPrimitive(
    "http://109.199.99.66:8000/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzA4NzEzMDAwLAogICJleHAiOiAxODY2NTY1ODAwCn0.ZuLdBR1TRM_FUK6xmvgd7PvxwmJWC6lDLhW_ec7gSSg"
  );

  return supabase;
}

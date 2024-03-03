import { createClient as createClientPrimitive } from "@supabase/supabase-js";

export function createClient() {
  const supabase = createClientPrimitive(
    "https://jsjoswfatcvghzacmiqj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impzam9zd2ZhdGN2Z2h6YWNtaXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzMTQ0MTIsImV4cCI6MjAyNDg5MDQxMn0.B9rmmcXVjTvnsPruN_AmKgxIuXTLN2RXRRrjUf5twr8"
  );

  return supabase;
}

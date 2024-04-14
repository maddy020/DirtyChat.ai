import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY as string;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST as string;

if (typeof window !== "undefined") {
  posthog.init(key, {
    api_host: host,
  });
}
export default function CSPostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

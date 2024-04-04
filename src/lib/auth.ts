import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_API ?? ""
);

export const NEXT_AUTH_CONFIG: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*****",
        },
      },
      async authorize(credentials: any) {
        const admin = await supabase
          .from("Admin")
          .select("*")
          .eq("email", credentials.username)
          .eq("password", credentials.password);
        if (admin.error) {
          return null;
        }
        return {
          id: admin.data[0].id,
          email: admin.data[0].email,
          name: admin.data[0].username,
        };
      },
    }),
  ],
  //   adapter: SupabaseAdapter({
  //     url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  //     secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  //   }),
  //   callbacks: {
  //     async session({ session, token, user }) {
  //       const signingSecret = process.env.SUPABASE_JWT_SECRET;
  //       if (signingSecret) {
  //         const payload = {
  //           aud: "authenticated",
  //           exp: Math.floor(new Date(session.expires).getTime() / 1000),
  //           sub: user.id,
  //           email: user.email,
  //           role: "authenticated",
  //         };
  //         session.supabaseAccessToken = jwt.sign(payload, signingSecret);
  //       }
  //       return session;
  //     },
  //   },

  // secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    session: ({ session, token, user }: any) => {
      const payload = {
        aud: "authenticated",
        exp: Math.floor(new Date(session.expires).getTime() / 1000),
        sub: token.sub,
        name: token.name,
        email: token.email,
        role: "authenticated",
      };
      session.supabaseAccessToken = jwt.sign(
        payload,
        process.env.NEXTAUTH_SECRET as string
      );
      console.log(process.env.NEXTAUTH_SECRET);
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/admin/dashboard";
    },
  },
};

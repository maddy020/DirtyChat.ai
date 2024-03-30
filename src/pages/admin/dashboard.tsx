import CardAdmin from "@/components/admin/CardAdmin";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { createClient } from "../../../utils/supabase/server-props";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

export default function Dashboard() {
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <div className="ml-60 mt-28 h-[80vh] flex flex-col justify-start gap-8 px-8">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex justify-between">
          <CardAdmin title="Total Users" number="2345" />
          <CardAdmin title="Total Characters" number="2345" />
          <CardAdmin title="Total Visitors" number="2345" />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(
    context.req,
    context.res,
    NEXT_AUTH_CONFIG
  );
  console.log(session);
  if (session == null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

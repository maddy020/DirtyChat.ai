import CardAdmin from "@/components/admin/CardAdmin";
import Navbar from "@/components/admin/Navbar";
import SideBar from "@/components/admin/SideBar";
import { GetServerSidePropsContext } from "next";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <SideBar />
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
  const { req } = context;
  const cookieHeader = req.headers.cookie;
  const adminToken = cookieHeader?.includes("admin");
  if (!adminToken) {
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

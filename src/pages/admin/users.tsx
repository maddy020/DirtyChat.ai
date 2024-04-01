import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@/components/ui/table";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { createClient } from "../../../utils/supabase/server-props";
import { useState } from "react";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

type Item = {
  id: number;
  username: string;
};

export default function Users({
  serverData,
  AdminData,
}: {
  serverData: Array<Item>;
  AdminData: string;
}) {
  const [Data, setData] = useState(serverData);
  console.log(Data);
  return (
    <>
      <AdminNavbar name={AdminData} />
      <AdminSidebar />
      <div className="ml-80 mt-20 pt-10">
        <h1 className="text-3xl font-semibold">Users</h1>

        {Data.length !== 0 && (
          <div className="border-2 w-3/4 rounded-3xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Data.map((item: Item) => {
                  return (
                    <>
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>
                          {/* <Add item={item} Data={Data} setData={setData} /> */}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await axios.get(`${Base_Url}/admin/users`, {
    withCredentials: true,
  });
  const session = await getServerSession(
    context.req,
    context.res,
    NEXT_AUTH_CONFIG
  );

  if (!session) {
    return {
      props: {},
    };
  }
  const AdminData = session.user.name;
  const serverData = res.data;
  return {
    props: { serverData, AdminData },
  };
}

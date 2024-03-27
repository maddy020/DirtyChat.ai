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
import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

export default function Users({ data }: { data: Array<Item> }) {
  const [Data, setData] = useState(data);
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
      <div className="ml-80 mt-20 pt-10">
        <h1 className="text-3xl font-semibold">Users</h1>

        {data.length !== 0 && (
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
                      <TableRow>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
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

export async function getServerSideProps(context: GetServerSideProps) {
  const res = await axios.get("http://localhost:8000/admin/users", {
    withCredentials: true,
  });
  const data = res.data;
  return {
    props: { data },
  };
}

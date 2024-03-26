import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@/components/ui/table";
import Navbar from "@/components/admin/Navbar";
import SideBar from "@/components/admin/SideBar";
import Image from "next/image";
import Add from "@/components/admin/Add";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
};

export default function Dashboard({ data }: { data: Array<Item> }) {
  const [Data, setData] = useState(data);
  return (
    <>
      <Navbar />
      <SideBar />
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

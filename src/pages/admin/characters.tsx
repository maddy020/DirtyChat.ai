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
  attributes: {
    "Personality Attributes": {
      Personality: string;
      Occupation: string;
      Hobbies: string;
      Relationship: string;
    };
    "Physical Attributes": {
      Body: string;
      Age: string;
      Ethincity: string;
    };
  };
  profile_images: { [key: string]: string };
  system_prompts: {
    description: string;
  };
};

export default function ModelDashboard({ data }: { data: Array<Item> }) {
  const [Data, setData] = useState(data);

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="ml-64 mt-20 pt-8 pr-10">
        <div className="flex w-full justify-between pb-4">
          <h1 className="text-3xl font-semibold">Characters</h1>
          <Add item={null} Data={Data} setData={setData} />
        </div>
        {Data.length !== 0 && (
          <div className="border-2 rounded-3xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Data.map((item: Item) => {
                  return (
                    <>
                      <TableRow>
                        <TableCell>
                          <Image
                            src={item.profile_images["0"]}
                            alt="profile"
                            width={48}
                            height={48}
                            className="w-16 h-16 rounded-2xl border-2 border-[#fff]"
                          />
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          <Add item={item} Data={Data} setData={setData} />
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
  const res = await axios.get("http://localhost:8000/admin/models", {
    withCredentials: true,
  });
  const data = res.data;
  return {
    props: { data },
  };
}

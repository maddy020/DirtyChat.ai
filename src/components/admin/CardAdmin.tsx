import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardAdmin({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  return (
    <Card className="bg-[#333332] border-none rounded-2xl h-72 w-96">
      <CardContent className="text-white p-6 text-lg">{title}</CardContent>
      <CardTitle className="flex justify-center mt-10 items-center text-5xl">
        {number}
      </CardTitle>
    </Card>
  );
}

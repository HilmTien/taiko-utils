import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/Card";

export default function PPDisplay() {
  return (
    <Card className="w-[550px]">
      <CardHeader className="items-center">
        <CardTitle className="text-4xl">500pp</CardTitle>
        <CardDescription className="self-end">
          Max: 520pp (<span className="text-red-500">-3</span>)
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/Card";
import { Input } from "../ui/atoms/Input";
import InputField from "../ui/molecules/InputField";
import ModButton from "../ui/molecules/ModButton";

export default function PPInputCards() {
  return (
    <div className="flex gap-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex justify-center">Map Stats</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="flex flex-col gap-4">
            <InputField className="w-20" label="Star Rating:"></InputField>
            <InputField
              className="w-20"
              label="Overall Difficulty:"
            ></InputField>
            <InputField className="w-20" label="Combo: "></InputField>
          </div>
        </CardContent>
      </Card>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex justify-center">Accuracy</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="flex flex-col gap-4">
            <InputField className="w-20" label="150:"></InputField>
            <InputField className="w-20" label="Miss:"></InputField>
            <p>
              Calculated: <b>00.00%</b>
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex justify-center">Mods</CardTitle>
        </CardHeader>
        <CardContent>
          <ModButton mod="hr"></ModButton>
          <ModButton mod="ez"></ModButton>
          <ModButton mod="dt"></ModButton>
          <ModButton mod="dt"></ModButton>
        </CardContent>
      </Card>
    </div>
  );
}

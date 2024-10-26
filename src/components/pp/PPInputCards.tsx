import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/Card";
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
            <InputField
              className="w-20"
              label="Star Rating:"
              type="number"
              min={0}
              step={0.01}
            ></InputField>
            <InputField
              className="w-20"
              label="Overall Difficulty:"
              type="number"
              min={0}
              max={10}
              step={0.01}
            ></InputField>
            <InputField
              className="w-20"
              label="Max Combo: "
              type="number"
              min={0}
            ></InputField>
          </div>
        </CardContent>
      </Card>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex justify-center">Accuracy</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="flex flex-col gap-4">
            <InputField
              className="w-20"
              label="100:"
              type="number"
              min={0}
            ></InputField>
            <InputField
              className="w-20"
              label="Miss:"
              type="number"
              min={0}
            ></InputField>
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
        <CardContent className="flex justify-center">
          <div className="grid grid-cols-3 place-items-center select-none">
            <ModButton mod="hr"></ModButton>
            <ModButton mod="ez"></ModButton>
            <ModButton mod="dt"></ModButton>
            <ModButton mod="ht"></ModButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

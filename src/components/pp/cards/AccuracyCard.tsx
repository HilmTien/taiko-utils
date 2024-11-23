import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/Card";
import InputField from "@/components/ui/molecules/InputField";
import { calcAcc } from "@/lib/osuUtils";
import { round } from "@/lib/utils";
import React from "react";
import { PPDispatchContext, PPStateContext } from "../PPState";

export default function AccuracyCard() {
  const state = React.useContext(PPStateContext);
  const dispatch = React.useContext(PPDispatchContext);

  return (
    <Card className="w-[310px] min-[550px]:w-96">
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
            value={state.accuracy.good.toString()}
            onChange={(e) =>
              dispatch({ type: "setGood", value: Number(e.target.value) })
            }
          ></InputField>
          <InputField
            className="w-20"
            label="Miss:"
            type="number"
            min={0}
            value={state.accuracy.miss.toString()}
            onChange={(e) =>
              dispatch({ type: "setMiss", value: Number(e.target.value) })
            }
          ></InputField>
          <p className="w-36 text-nowrap whitespace-nowrap">
            Calculated:{" "}
            <b>
              {round(
                calcAcc(
                  state.mapStats.maxCombo,
                  state.accuracy.good,
                  state.accuracy.miss
                )
              )}
              %
            </b>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

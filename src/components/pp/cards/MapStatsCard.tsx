import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/Card";
import InputField from "@/components/ui/molecules/InputField";
import React from "react";
import { PPDispatchContext, PPStateContext } from "../PPState";

export default function MapStatsCard() {
  const state = React.useContext(PPStateContext);
  const dispatch = React.useContext(PPDispatchContext);

  return (
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
            value={state.mapStats.sr.toString()}
            onChange={(e) =>
              dispatch({
                type: "setStarRating",
                value: Number(e.target.value),
              })
            }
          ></InputField>
          <InputField
            className="w-20"
            label="Overall Difficulty:"
            type="number"
            min={0}
            max={10}
            step={0.01}
            value={state.mapStats.od.toString()}
            onChange={(e) =>
              dispatch({
                type: "setOverallDifficulty",
                value: Number(e.target.value),
              })
            }
          ></InputField>
          <InputField
            className="w-20"
            label="Max Combo: "
            type="number"
            min={0}
            value={state.mapStats.maxCombo.toString()}
            onChange={(e) =>
              dispatch({ type: "setMaxCombo", value: Number(e.target.value) })
            }
          ></InputField>
        </div>
      </CardContent>
    </Card>
  );
}

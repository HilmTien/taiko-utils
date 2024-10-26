import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/Card";
import { round } from "@/lib/utils";
import React from "react";
import InputField from "../ui/molecules/InputField";
import ModButton from "../ui/molecules/ModButton";
import { PPDispatchContext, PPStateContext } from "./PPState";

export default function PPInputCards() {
  const state = React.useContext(PPStateContext);
  const dispatch = React.useContext(PPDispatchContext);

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
                  ((state.mapStats.maxCombo -
                    state.accuracy.good -
                    state.accuracy.miss) *
                    100 +
                    state.accuracy.good * 50) /
                    state.mapStats.maxCombo
                )}
                %
              </b>
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

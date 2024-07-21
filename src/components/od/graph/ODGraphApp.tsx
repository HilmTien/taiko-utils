"use client";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/atoms/Chart";
import useWindowDimensions from "@/lib/hooks/useWindowDimensions";
import { ODtoMS150, ODtoMS300 } from "@/lib/od/overallDifficulty";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const chartConfig = {
  od: {
    label: "OD",
  },
  ms300: {
    label: "± ms 300",
    color: "hsl(var(--chart-2))",
  },
  ms150: {
    label: "± ms 150",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function ODGraphApp() {
  const chartData = React.useMemo(() => {
    const data = [];

    for (let i = 0; i <= 1200; i++) {
      const od = i / 100;
      data.push({
        od: od.toFixed(2),
        ms300: ODtoMS300(od),
        ms150: ODtoMS150(od),
      });
    }

    return data;
  }, []);

  const { width } = useWindowDimensions();

  // 49 -> 0.0, 0.5, 1.0 ...
  // 99 -> 0.0, 1.0, 2.0 ...
  const xInterval = width > 800 ? 49 : 99;
  // 25 -> 0, 5, 10, 15 ...
  // 13 -> 0, 10, 20, 30 ...
  const yTickCount = width > 1024 ? 25 : 13;

  return (
    <ChartContainer
      config={chartConfig}
      className="min-w-[350px] w-[80vw] max-w-screen-xl"
    >
      <LineChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey={"od"}
          label={{
            value: "Overall Difficulty",
            position: "insideBottom",
            offset: -5,
          }}
          interval={xInterval}
          tickFormatter={(val) => parseFloat(val).toFixed(1)}
        />
        <YAxis
          label={{
            value: "Boundary (± ms)",
            position: "insideLeft",
            angle: -90,
            offset: 20,
          }}
          domain={[0, 120]}
          tickCount={yTickCount}
          interval={0}
        />
        <CartesianGrid />
        <Line
          dataKey="ms300"
          type={"linear"}
          dot={false}
          stroke="var(--color-ms300)"
        />
        <Line
          dataKey="ms150"
          type={"linear"}
          dot={false}
          stroke="var(--color-ms150)"
        />
        <ChartTooltip
          content={
            <ChartTooltipContent labelFormatter={(val) => "OD " + val} />
          }
        />
      </LineChart>
    </ChartContainer>
  );
}

"use client";

import { ScrollArea } from "@/components/ui/atoms/scroll-area";
import { ODtoMS150, ODtoMS300 } from "@/lib/od/overallDifficulty";
import React from "react";
import { ODStateContext } from "../ODState";

export default function ODTable() {
  const state = React.useContext(ODStateContext);

  let { min, max, step } = state.table;

  const ODValues = [];

  while (min < max) {
    ODValues.push(min);
    min = Math.round((min + step) * 100) / 100;
  }

  ODValues.push(max);

  return (
    <ScrollArea className="h-[60vh] md:h-[80vh] border-b-4 border-t-4">
      <table className="table-fixed w-80 text-center">
        <thead>
          <tr className="border-b-2">
            <th className="py-1">OD</th>
            <th className="py-1">+- ms 300</th>
            <th className="py-1">+- ms 150</th>
          </tr>
        </thead>
        <tbody>
          {ODValues.map((od) => (
            <tr key={od}>
              <td className="py-1">{od}</td>
              <td className="py-1">{ODtoMS300(od)}</td>
              <td className="py-1">{ODtoMS150(od)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  );
}

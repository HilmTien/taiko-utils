import { ODtoMS150, ODtoMS300 } from "@/lib/od/overallDifficulty";
import React from "react";
import { ODStateContext } from "./ODState";

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
    <table className="table-fixed w-80 text-center">
      <thead className="border-b-2">
        <tr>
          <th>OD</th>
          <th>+- ms 300</th>
          <th>+- ms 150</th>
        </tr>
      </thead>
      <tbody>
        {ODValues.map((od) => (
          <tr key={od}>
            <td>{od}</td>
            <td>{ODtoMS300(od)}</td>
            <td>{ODtoMS150(od)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

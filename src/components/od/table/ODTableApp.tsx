"use client";

import { ODStateProvider } from "./ODState";
import ODTable from "./ODTable";
import ODTableForm from "./ODTableForm";

export default function ODTableApp() {
  return (
    <div className="flex justify-start gap-4">
      <ODStateProvider>
        <ODTableForm />
        <ODTable />
      </ODStateProvider>
    </div>
  );
}

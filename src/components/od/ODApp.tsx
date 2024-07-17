"use client";

import InteractiveODComponent from "@/components/od/interactive/InteractiveODApp";
import ODTableApp from "@/components/od/table/ODTableApp";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/atoms/Tabs";
import React from "react";
import { ODDispatchContext, ODStateContext } from "./ODState";

export default function ODApp() {
  const state = React.useContext(ODStateContext);
  const dispatch = React.useContext(ODDispatchContext);

  React.useEffect(() => {
    const handleUnload = (_: Event) => {
      localStorage.setItem("od", JSON.stringify(state));
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [state]);

  React.useEffect(() => {
    try {
      let initialState = localStorage.getItem("od");
      if (initialState === null) {
        throw new Error("first time eh?");
      }
      const data = JSON.parse(initialState);
      dispatch({ type: "useLocalStorage", state: data });
    } catch (error) {}
  }, []);

  return (
    <Tabs className="flex flex-col items-center" defaultValue="interactive">
      <TabsList>
        <TabsTrigger value="table">Table</TabsTrigger>
        <TabsTrigger value="interactive">Interactive</TabsTrigger>
      </TabsList>
      <TabsContent value="table">
        <ODTableApp />
      </TabsContent>
      <TabsContent className="w-full flex justify-center" value="interactive">
        <InteractiveODComponent />
      </TabsContent>
    </Tabs>
  );
}

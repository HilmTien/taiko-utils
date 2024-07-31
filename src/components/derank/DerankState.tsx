"use client";

import { flipSetMember } from "@/lib/utils";
import React from "react";

interface DerankState {
  derankedIDs: Set<number>;
}

type DerankAction = {
  type: "flipID";
  id: number;
};

const initialDerankState: DerankState = {
  derankedIDs: new Set(),
};

function reducer(state: DerankState, action: DerankAction) {
  switch (action.type) {
    case "flipID": {
      return {
        ...state,
        derankedIDs: flipSetMember(state.derankedIDs, action.id),
      };
    }
  }
}

export const DerankStateContext =
  React.createContext<DerankState>(initialDerankState);
export const DerankDispatchContext = React.createContext<
  React.Dispatch<DerankAction>
>(() => null);

type DerankStateProviderProps = { children: React.ReactNode };

export function DerankStateProvider({ children }: DerankStateProviderProps) {
  const [DerankState, dispatch] = React.useReducer(reducer, initialDerankState);

  return (
    <DerankStateContext.Provider value={DerankState}>
      <DerankDispatchContext.Provider value={dispatch}>
        {children}
      </DerankDispatchContext.Provider>
    </DerankStateContext.Provider>
  );
}

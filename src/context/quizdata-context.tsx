import React, { createContext, useContext } from "react";
import { data } from "../data/data";
import { QUIZCATEGORIES } from "../data/data.types";
export const DataContext = createContext<QUIZCATEGORIES | null>(null);

export function DataProvider({ children }: React.PropsWithChildren<{}>) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}

import React, { createContext, useContext, useState } from "react";
import { QuizDataContext } from "../types/data.types";
export const DataContext = createContext<QuizDataContext>(
  {} as QuizDataContext
);

export function DataProvider({ children }: React.PropsWithChildren<{}>) {
  const [data, setData] = useState({ quizCategories: [] });
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

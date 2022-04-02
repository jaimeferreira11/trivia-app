import React, { useReducer } from "react";
import Navigation from "./src/navigation/Navigation";
import { AppContext } from "./src/context/AppContext";
import { appReducer } from "./src/context/appReducer";
import { Answer } from "./src/interfaces/interfaces";

const initialState = {
  answerList: [] as Answer[],
};

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Navigation />
    </AppContext.Provider>
  );
}

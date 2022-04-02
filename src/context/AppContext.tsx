import { createContext, Dispatch } from "react";
import { AppAction, AppState } from "../interfaces/interfaces";

export type AppContextProps = {
  state: AppState;
  dispatch: Dispatch<AppAction>;
};
export const AppContext = createContext<AppContextProps>({} as AppContextProps);

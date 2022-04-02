import { AppAction, AppState } from "../interfaces/interfaces";

export const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "SET_ANSWER_LIST":
      return { ...state, answerList: action.payload.answerList };
    default:
      return state;
  }
};

import { ModalStateType, ModalAction } from "../types/modalStateTypes";

export function modelReducer(state: ModalStateType, action: ModalAction) {
  switch (action.type) {
    case "open":
      return action.payload;
    case "close":
      return action.payload;
    default:
      return state;
  }
}

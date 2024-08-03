import { ReactNode, Dispatch } from "react";

export type ModalStateType = {
  open: boolean;
};
export type ModalAction =
  | { type: "open"; payload: ModalStateType }
  | { type: "close"; payload: ModalStateType };

export type ModalStateDispatchContextType = Dispatch<ModalAction>;
export type ModalStateProviderProps = { children: ReactNode };

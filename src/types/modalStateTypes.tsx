import { ReactNode, Dispatch } from "react";
import { FlashCard } from "./flashCardTypes";

export type ModalStateType = {
  open: boolean;
  flashCard?: FlashCard;
};
export type ModalAction =
  | { type: "open"; payload: ModalStateType }
  | { type: "close"; payload: ModalStateType };

export type ModalStateDispatchContextType = Dispatch<ModalAction>;
export type ModalStateProviderProps = { children: ReactNode };

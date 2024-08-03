import { ReactNode, Dispatch } from "react";

export type FlashCard = {
  id: string;
  title: string;
  details: string;
};
export type FlashCardContextProviderProps = {
  children: ReactNode;
};
export type FlashCardAction =
  | { type: "addFlashCard"; payload: FlashCard }
  | { type: "deleteFlashCard"; payload: string };

export type FlashCardDispatchContextType = Dispatch<FlashCardAction>;
export type FlashCardContextType = FlashCard[];
export type ActionType = {
  type: string;
  payload: FlashCard | string;
};

import {
  FlashCardContext,
  FlashCardDispatchContext,
} from "../contexts/FlashCardContext";

import { useContext } from "react";

export function useFlashCards() {
  const context = useContext(FlashCardContext);
  if (context === undefined) {
    throw new Error(
      "useFlashCards must be used within a FlashCardContextProvider"
    );
  }
  return context;
}

export function useFlashCardDispatch() {
  const context = useContext(FlashCardDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useFlashCardDispatch must be used within a FlashCardContextProvider"
    );
  }
  return context;
}

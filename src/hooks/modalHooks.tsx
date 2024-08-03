import {
  ModalStateContext,
  ModelStateDispatchContext,
} from "../contexts/ModalStateContext";

import { useContext } from "react";

export function useModalState() {
  const context = useContext(ModalStateContext);
  if (context === undefined)
    throw new Error("useModalState must be used within a ModalStateProvider");
  return context;
}

export function useModalStateDispatch() {
  const context = useContext(ModelStateDispatchContext);
  if (context === undefined)
    throw new Error(
      "useModalStateDispatch must be used within a ModalStateProvider"
    );
  return context;
}

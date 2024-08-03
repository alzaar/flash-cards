import { createContext, useReducer } from "react";
import {
  ModalStateType,
  ModalStateProviderProps,
} from "../types/modalStateTypes";

import { ModalStateDispatchContextType } from "../types/modalStateTypes";
import { modelReducer } from "../reducers/modelReducer";

export const initialState: ModalStateType = { open: false };
export const ModalStateContext = createContext<undefined | ModalStateType>(
  undefined
);
export const ModelStateDispatchContext = createContext<
  undefined | ModalStateDispatchContextType
>(undefined);

export function ModalStateProvider({ children }: ModalStateProviderProps) {
  const [state, dispatch] = useReducer(modelReducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModelStateDispatchContext.Provider value={dispatch}>
        {children}
      </ModelStateDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

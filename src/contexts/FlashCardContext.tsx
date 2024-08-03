import { createContext, useReducer, Dispatch } from "react";
import {
  FlashCardContextType,
  FlashCardDispatchContextType,
  FlashCard,
  FlashCardContextProviderProps,
} from "../types/flashCardTypes";
import { flashCardsReducer } from "../reducers/flashCardsReducer";

const initialState: FlashCard[] = [];

export const FlashCardContext = createContext<FlashCardContextType | undefined>(
  undefined
);
export const FlashCardDispatchContext = createContext<
  FlashCardDispatchContextType | undefined
>(undefined);

export function FlashCardContextProvider({
  children,
}: FlashCardContextProviderProps) {
  const [state, dispatch] = useReducer(flashCardsReducer, initialState);

  return (
    <FlashCardContext.Provider value={state}>
      <FlashCardDispatchContext.Provider value={dispatch}>
        {children}
      </FlashCardDispatchContext.Provider>
    </FlashCardContext.Provider>
  );
}

import { FlashCard } from "../types/flashCardTypes";

export function flashCardsReducer(flashCards: FlashCard[], action: any) {
  switch (action.type) {
    case "addFlashCard":
      return [...flashCards, action.payload];
    case "deleteFlashCard":
      return flashCards.filter(
        (flashCard: FlashCard) => flashCard.id !== action.payload
      );
    default:
      return flashCards;
  }
}

import { FlashCard } from "../types/flashCardTypes";

export function flashCardsReducer(flashCards: FlashCard[], action: any) {
  switch (action.type) {
    case "addFlashCard":
      const onCreateFlashCards = [...flashCards, action.payload];
      onCreateFlashCards.sort((a: FlashCard, b: FlashCard) =>
        a.id.localeCompare(b.id)
      );
      return onCreateFlashCards;
    case "deleteFlashCard":
      const onDeleteFlashCards = flashCards.filter(
        (flashCard: FlashCard) => flashCard.id !== action.payload
      );
      onDeleteFlashCards.sort((a: FlashCard, b: FlashCard) =>
        a.id.localeCompare(b.id)
      );
      return onDeleteFlashCards;
    case "editFlashCard":
      const onEditFlashCards = [
        action.payload,
        ...flashCards.filter(
          (flashCard: FlashCard) => flashCard.id !== action.payload.id
        ),
      ];
      onEditFlashCards.sort((a: FlashCard, b: FlashCard) =>
        a.id.localeCompare(b.id)
      );
      return onEditFlashCards;
    default:
      return flashCards;
  }
}

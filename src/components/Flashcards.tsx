import "swiper/css";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import FlashCard from "./FlashCard";
import { useFlashCards, useFlashCardDispatch } from "../hooks/flashCardHooks";

const Flashcards = () => {
  const flashCards = useFlashCards();
  const dispatch = useFlashCardDispatch();
  const deleteFlashCard = (id: string) =>
    dispatch({
      type: "deleteFlashCard",
      payload: id,
    });

  const cards = flashCards.map((flashCard) => {
    return (
      <Fragment key={flashCard.id}>
        <SwiperSlide key={flashCard.id} style={{ padding: 20 }}>
          <FlashCard {...flashCard} deleteFlashCard={deleteFlashCard} />
        </SwiperSlide>
      </Fragment>
    );
  });

  return (
    <>
      <Swiper style={{ width: "50%" }} spaceBetween={100} slidesPerView={1}>
        {cards}
      </Swiper>
    </>
  );
};

export default Flashcards;

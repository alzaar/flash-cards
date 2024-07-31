import React from "react";

// Arrow Icons
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FlashCard from "./FlashCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FlashCard as FlashCardType } from "./App";

type FlashCards = {
  flashCards: FlashCardType[];
};

const Flashcards = ({ flashCards }: FlashCards) => {
  const cards = flashCards.map((flashCard) => {
    return (
      <SwiperSlide>
        <FlashCard {...flashCard} />
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {cards}
      </Swiper>
    </>
  );
};

export default Flashcards;

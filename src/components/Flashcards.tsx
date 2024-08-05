// import "swiper/css";
import Slider from "react-slick";
import { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-overrides.css";

import FlashCard from "./FlashCard";
import { useFlashCards } from "../hooks/flashCardHooks";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  style: {
    width: "50%",
    minHeight: 200,
  },
  nextArrow: undefined,
  prevArrow: undefined,
};

const Flashcards = () => {
  const flashCards = useFlashCards();

  const cards = flashCards.map((flashCard) => {
    return (
      <Fragment key={flashCard.id}>
        <FlashCard {...flashCard} />
      </Fragment>
    );
  });

  return (
    <>
      <Slider {...settings}>{cards}</Slider>
    </>
  );
};

export default Flashcards;

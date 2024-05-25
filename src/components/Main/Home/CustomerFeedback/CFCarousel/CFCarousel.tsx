import CFCarouselCard from "./CFCarouselCard/CFCarouselCard";

import CFCarouselNav from "./CFCarouselNav/CFCarouselNav";

import { feedbackList } from "data";

import "./CFCarousel.scss";
import { useEffect, useState } from "react";

const CFCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentCard(
      (currentCard - cardsPerPage + feedbackList.length) % feedbackList.length
    );
  };

  const handleNext = () => {
    setCurrentCard((currentCard + cardsPerPage) % feedbackList.length);
  };

  return (
    <div className="cf-carousel">
      <div className="cf-carousel__list">
        {feedbackList
          .slice(currentCard, currentCard + cardsPerPage)
          .map((item, key) => (
            <CFCarouselCard {...item} key={key} />
          ))}
      </div>
      <CFCarouselNav handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default CFCarousel;

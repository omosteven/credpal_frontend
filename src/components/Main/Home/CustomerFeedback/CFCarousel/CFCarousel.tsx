import CFCarouselCard from "./CFCarouselCard/CFCarouselCard";

import CFCarouselNav from "./CFCarouselNav/CFCarouselNav";

import { feedbackList } from "data";

import "./CFCarousel.scss";

const CFCarousel = () => {
  return (
    <div className="cf-carousel">
      <div className="cf-carousel__list">
        {feedbackList
          ?.filter((i, index) => index < 3)
          ?.map((item, key) => (
            <CFCarouselCard {...item} key={key} />
          ))}
      </div>
      <CFCarouselNav />
    </div>
  );
};

export default CFCarousel;

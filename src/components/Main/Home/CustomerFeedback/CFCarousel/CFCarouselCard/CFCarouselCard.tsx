import { Rating } from "../../../../../ui";
import "./CFCarouselCard.scss";

interface ICFCarousel {
  name: string;
  text: string;
  rating: number;
  picture: string;
}

const CFCarouselCard = (props: ICFCarousel) => {
  const { name, text, rating, picture } = props;
  return (
    <section className="cf-carousel-card" id="cf-carousel-card">
      <div className="cf-carousel-card__heading">
        <img src={picture} alt={name} />
        <h5>{name}</h5>
      </div>
      <p>{text}</p>
      <Rating rateValue={rating} />
    </section>
  );
};
export default CFCarouselCard;

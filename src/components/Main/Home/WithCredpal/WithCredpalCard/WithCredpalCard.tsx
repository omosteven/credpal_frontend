import "./WithCredpalCard.scss";

import { Link } from "react-router-dom";

interface IWithCredpalCard {
  title: string;
  description: string;
  icon: string;
  route: string;
  background: string;
  routeIcon: string;
}

const WithCredpalCard = (props: IWithCredpalCard) => {
  const { title, description, icon, route, background, routeIcon } = props;
  return (
    <section className="with-credpal-card" style={{ background }}>
      <div>
        <span>
          <img src={icon} alt="title" />
        </span>
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to={route}>
          Learn More
          <img src={routeIcon} alt="Go" />{" "}
        </Link>
      </div>
    </section>
  );
};

export default WithCredpalCard;

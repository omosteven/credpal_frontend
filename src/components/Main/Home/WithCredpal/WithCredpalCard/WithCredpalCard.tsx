import "./WithCredpalCard.scss";

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
    <section
      className="with-credpal-card"
      style={{ background }}
      data-aos="zoom-in"
    >
      <div>
        <span>
          <img src={icon} alt="title" />
        </span>
        <h3>{title}</h3>
        <p>{description}</p>

        {/* update to <Link for  fully fleshed  website */}
        <a href={route}>
          Learn More
          <img src={routeIcon} alt="Go" />{" "}
        </a>
      </div>
    </section>
  );
};

export default WithCredpalCard;

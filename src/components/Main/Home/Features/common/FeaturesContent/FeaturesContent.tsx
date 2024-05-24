import { Button } from "../../../../../ui";
import "./FeaturesContent.scss";

interface IFeaturesContent {
  title: string;
  description: string;
  isBtnRounded: boolean;
}

const FeaturesContent = (props: IFeaturesContent) => {
  const { title, description, isBtnRounded } = props;
  return (
    <section className={`features-content ${isBtnRounded ? "rounded" : ""} `}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button text="Download App" />
    </section>
  );
};

export default FeaturesContent;

import FeaturesContent from "../common/FeaturesContent/FeaturesContent";
import FeaturesImage from "../common/FeaturesImage/FeaturesImage";
import "./EachFeature.scss";

interface IEachFeature {
  title: string;
  description: string;
  isBtnRounded: boolean;
  image: string;
}

const EachFeature = (props: IEachFeature) => {
  const { title, description, isBtnRounded, image } = props;
  return (
    <section className="each-feature">
      <FeaturesContent {...{ title, description, isBtnRounded }} />
      <FeaturesImage image={image} />
    </section>
  );
};

export default EachFeature;

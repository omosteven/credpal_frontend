import "./FeaturesImage.scss";

interface IFeatureImage {
  image: string;
}

const FeaturesImage = (props: IFeatureImage) => {
  const { image } = props;

  return (
    <section className="feature-image">
      <img src={image} alt="Feature" />
    </section>
  );
};

export default FeaturesImage;

import assets from "assets";

const HeroImage = () => {
  return (
    <section className="second" data-aos="zoom-in">
      <img src={assets.images.heroImage} alt="Hero Section" />{" "}
    </section>
  );
};

export default HeroImage;

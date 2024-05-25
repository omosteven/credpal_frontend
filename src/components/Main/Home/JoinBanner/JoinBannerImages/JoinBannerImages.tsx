import assets from "assets";
import "./JoinBannerImages.scss";

const JoinBannerImages = () => {
  return (
    <section className="join-banner-images" data-aos="zoom-in">
      <img src={assets.images.joinImage} alt="Join Us" />
    </section>
  );
};

export default JoinBannerImages;

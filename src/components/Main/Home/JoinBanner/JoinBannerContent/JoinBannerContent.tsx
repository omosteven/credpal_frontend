import assets from "assets";
import "./JoinBannerContent.scss";

const { playStore, appStore } = assets.images;

const JoinBannerContent = () => {
  return (
    <section className="join-banner-content">
      <h3>Join CredPal today</h3>
      <p>
        Download the CredPal app and join millions of satisfied customers who
        are already using CredPal to access credit, make payments, invest & many
        more!
      </p>
      <div>
        <img src={appStore} alt="App Store" />
        <img src={playStore} alt="Play Store" />
      </div>
    </section>
  );
};

export default JoinBannerContent;

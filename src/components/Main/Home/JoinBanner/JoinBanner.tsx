import "./JoinBanner.scss";
import JoinBannerContent from "./JoinBannerContent/JoinBannerContent";
import JoinBannerImages from "./JoinBannerImages/JoinBannerImages";

const JoinBanner = () => {
  return (
    <div className="join-banner">
      <JoinBannerContent />
      <JoinBannerImages />
    </div>
  );
};

export default JoinBanner;

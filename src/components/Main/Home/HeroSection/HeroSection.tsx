import HeroContent from "./HeroContent/HeroContent";

import HeroImage from "./HeroImage/HeroImage";

import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <HeroContent />
      <HeroImage />
    </div>
  );
};

export default HeroSection;

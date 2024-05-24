import WithCredpal from "components/Main/Home/WithCredpal/WithCredpal";
import CustomerFeedback from "../../components/Main/Home/CustomerFeedback/CustomerFeedback";
import Features from "../../components/Main/Home/Features/Features";
import HeroSection from "../../components/Main/Home/HeroSection/HeroSection";
import AppBanner from "components/Main/Home/AppBanner/AppBanner";
import JoinBanner from "components/Main/Home/JoinBanner/JoinBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CustomerFeedback />
      <Features />
      <WithCredpal />
      <AppBanner />
      <JoinBanner />
    </>
  );
};

export default Home;

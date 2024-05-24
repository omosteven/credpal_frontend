import CFCarousel from "./CFCarousel/CFCarousel";
import CFHeader from "./CFHeader/CFHeader";
import "./CustomerFeedback.scss";

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <CFHeader />
      <CFCarousel />
    </div>
  );
};

export default CustomerFeedback;
import { Button } from "components/ui";
import "./AppBanner.scss";

const AppBanner = () => {
  return (
    <div className="app-banner" data-aos="zoom-in">
      <h3>Start building your credit score today</h3>
      <p>
        Download our app to get started on your credit journey in Africa. Make
        the first move towards a better financial future today.
      </p>
      <Button text="Download App" />
    </div>
  );
};

export default AppBanner;

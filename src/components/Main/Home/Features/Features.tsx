import EachFeature from "./EachFeature/EachFeature";

import "./Features.scss";

import { featuresList } from "data";

const Features = () => {
  return (
    <div className="features">
      {featuresList?.map((item, key) => (
        <EachFeature {...item} key={key} />
      ))}
    </div>
  );
};

export default Features;

import assets from "assets";
import Button from "../../Button";

import "./LayoutHeader.scss";
import Icon from "components/ui/Icon";

const { ng, credpalWhite } = assets.images;

const LayoutHeader = () => {
  return (
    <header className="layout-header">
      <section className="first">
        <img src={credpalWhite} alt="Credpal" />
        <h5>Products</h5>
        <h5>Business</h5>
        <h5>What We Do</h5>
      </section>
      <section className="second">
        <h5>FAQ</h5>
        <span>
          <img src={ng} alt="NG" />
          <Icon icon="dropDown" />
        </span>
        <Button text="Download the Credpal app" />
      </section>
    </header>
  );
};

export default LayoutHeader;

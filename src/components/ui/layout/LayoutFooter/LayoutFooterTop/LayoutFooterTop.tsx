import assets from "assets";

const { credpalBlack, appStore, playStore } = assets.images;

const LayoutFooterTop = () => {
  return (
    <section className="layout-footer__top">
      <div className="layout-footer__top__left">
        <div>
          <img src={credpalBlack} alt="Credpal" />

          <p>
            CredPal is a revolutionary credit solution geared towards providing
            seamless credit access for businesses and individuals across
            developing economies.
          </p>
        </div>
      </div>

      <div className="layout-footer__top__right">
        <div>
          <h5>Products</h5>
          <p>CredPal Personal</p>
          <p>CredPal Business</p>
          <p>CredPal Lifestyle</p>
        </div>

        <div>
          <h5>Legal</h5>
          <p>Customer Terms of use</p>
          <p>Merchant Terms of service</p>
          <p>Privacy Notice</p>
        </div>

        <div>
          <h5>Support</h5>
          <p>FAQs</p>
          <p>Blog</p>
        </div>

        <div className="layout-footer__top__store-img">
          <h5>Get the app</h5>
          <div>
            <img src={appStore} alt="App Store" />
            <img src={playStore} alt="Play Store" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutFooterTop;

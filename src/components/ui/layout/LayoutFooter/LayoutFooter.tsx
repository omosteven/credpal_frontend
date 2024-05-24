import LayoutFooterTop from "./LayoutFooterTop/LayoutFooterTop";

import LayoutFooterBottom from "./LayoutFooterBottom/LayoutFooterBottom";

import LayoutFooterMiddle from "./LayoutFooterMiddle/LayoutFooterMiddle";

import "./LayoutFooter.scss";

const LayoutFooter = () => {
  return (
    <footer className="layout-footer">
      <LayoutFooterTop />

      <LayoutFooterMiddle />

      <LayoutFooterBottom />
    </footer>
  );
};

export default LayoutFooter;

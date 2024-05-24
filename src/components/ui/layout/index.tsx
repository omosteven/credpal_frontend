import "./Layout.scss";
import { ReactNode } from "react";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutFooter from "./LayoutFooter/LayoutFooter";

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <div>
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;

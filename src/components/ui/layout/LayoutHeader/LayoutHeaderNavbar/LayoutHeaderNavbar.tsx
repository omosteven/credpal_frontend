import Button from "components/ui/Button";

const LayoutHeaderNavbar = (props:{isOpen:boolean}) => {
  const{isOpen}=props;
  return (
    <section className={`layout-header__mobile ${isOpen?"active":""}`}>
      {/* change h5 tags to <Link tags */}
      <h5>Products</h5>
      <h5>Business</h5>
      <h5>What We Do</h5>
      <h5>FAQ</h5>
      <Button text="Download the Credpal app" />
    </section>
  );
};

export default LayoutHeaderNavbar;

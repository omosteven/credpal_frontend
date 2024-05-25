const CFCarouselNav = (props: {
  handleNext: Function;
  handlePrev: Function;
}) => {
  const { handleNext, handlePrev } = props;
  return (
    <div className="cf-carousel__nav">
      <div>
        <button onClick={() => handlePrev()}>{"<"}</button>
        <button onClick={() => handleNext()}>{">"}</button>
      </div>
    </div>
  );
};

export default CFCarouselNav;

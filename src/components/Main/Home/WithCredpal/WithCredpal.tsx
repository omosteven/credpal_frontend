import { withCredpalList } from "data";
import "./WithCredpal.scss";
import WithCredpalCard from "./WithCredpalCard/WithCredpalCard";

const WithCredpal = () => {
  return (
    <div className="with-credpal">
      {withCredpalList?.map((item, key) => (
        <WithCredpalCard key={key} {...item} />
      ))}
    </div>
  );
};

export default WithCredpal;

import "./Accordeon.scss";
import { accordeonData } from "../../../data/store";
import AccordeonItem from "./AccordeonItem";

const Accordeon = () => {
  return (
    <div className="accordeon">
      <div className="accordeon__container">
        {accordeonData.map((item) => (
          <AccordeonItem
            key={item.id}
            content={item.content}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordeon;

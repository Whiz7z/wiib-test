import Minus from "../../svg/Minus";
import Plus from "../../svg/Plus";
import "./Accordeon.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion"; 

const AccordeonItem = ({ content, title }) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div className={`accordeon__item ${active ? "active" : ""}`}
    >
      <div className="title" onClick={() => setActive((prev) => !prev)}>
        <h2>{title}</h2>
        <div className="plus">{active ? <Minus /> : <Plus />}</div>
      </div>

      
      <motion.div
        className="content"
        initial={false}
        animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5 ,}} 
        style={{ overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: content }}
      >
        
      </motion.div>
    </motion.div>
  );
};

AccordeonItem.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default AccordeonItem;

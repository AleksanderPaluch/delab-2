import { Link } from "react-router-dom";
import css from "./Header.module.css";
import icon from "../../../assets/delab_icon.png";

const Header = () => {
  return (
    <div className={css.header}>
      <Link to={`/`}>
        {" "}
        <img src={icon} alt="delab-icon" className={css.icon} />
      </Link>

      <p>Jak korzystać z genAI na uczelni?</p>
    </div>
  );
};

export default Header;

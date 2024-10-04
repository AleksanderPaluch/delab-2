import "./Navigation.module.css";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import icon from "../../../assets/delab_icon.png";

const Navigation = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.iconBox}>
        <Link to={`/`}>
          {" "}
          <img src={icon} alt="delab-icon" className={css.icon} />
        </Link>

        <p>Jak korzystać z genAI na uczelni?</p>
      </div>
      <div className={css.listBox}>
        <ul className={css.navbarList}>
          <li className={css.navbarItem}>
            <Link to="/">Rekomendacje</Link>
          </li>
          <li className={css.navbarItem}>
            <Link to="/badanie">Badanie DELab UW</Link>
          </li>
          <li className={css.navbarItem}>
            <Link to="/wytyczne">Wytyczne</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

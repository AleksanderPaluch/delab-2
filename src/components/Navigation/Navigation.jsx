import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          {" "}
          <NavLink to="/rekomendacje" className={css.navLink}>
            Rekomendacje
          </NavLink>
        </li>
        <li className={css.item}>
          {" "}
          <NavLink to="/badanie" className={css.navLink}>
            Badanie DELab UW
          </NavLink>
        </li>
        <li className={css.item}>
          {" "}
          <NavLink to="/wytyczne" className={css.navLink}>
            Wytyczne
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

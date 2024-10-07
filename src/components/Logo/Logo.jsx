import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import logo from "../../../assets/unnamed.png";
const Logo = () => {
  return (
    <NavLink className={css.logo} to="/">
      <img className={css.logo} src={logo} alt="" />
    </NavLink>
  );
};

export default Logo;

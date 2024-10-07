import Logo from "../Logo/Logo";
import PropTypes from "prop-types";
import css from "./Page.module.css";

// import { Link } from "react-router-dom";

const Page = ({ children }) => {
  return (
    <div className={css.pageBox}>
      <aside className={css.sidebarLeft}>
        <Logo />
      </aside>
      <main className={css.mainContent}>{children}</main>
      <aside className={css.sidebarRight}>
        {/* Вміст для правого сайдбару */}
      </aside>
    </div>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node,
};

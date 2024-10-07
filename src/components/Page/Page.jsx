import Logo from "../Logo/Logo";
import PropTypes from "prop-types";
import css from "./Page.module.css";
import Navigation from "../Navigation/Navigation";

// import { Link } from "react-router-dom";

const Page = ({ children, id1 = null, id2 = null, id3 = null }) => {
  console.log(id1);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    const offset = 70; // відступ в пікселях
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className={css.pageBox}>
      <aside className={css.sidebarLeft}>
        <Logo />
        <Navigation />
      </aside>
      <main className={css.mainContent}>{children}</main>
      <aside className={css.sidebarRight}>
        {id1 ? (
          <nav className={css.tableOfContents}>
            <p className={css.text}>Na tej Stronie:</p>
            <ul>
              <li>
                <button
                  className={css.sideBarBtn}
                  onClick={() => scrollToId(`${id1}`)}
                >
                  {id1}
                </button>
              </li>
              <li>
                <button
                  className={css.sideBarBtn}
                  onClick={() => scrollToId(`${id2}`)}
                >
                  {id2}
                </button>
              </li>
              <li>
                <button
                  className={css.sideBarBtn}
                  onClick={() => scrollToId(`${id3}`)}
                >
                  {id3}
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
      </aside>
    </div>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node,
};

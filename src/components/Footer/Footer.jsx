import { NavLink } from "react-router-dom";
import css from "./Footer.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

import { TbLetterD } from "react-icons/tb";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = ({
  prevPage = null,
  nextPage = null,
  prevPageName,
  nextPageName,
}) => {
  return (
    <>
      <div className={css.footer}>
        {/* Додамо стиль prevlink, якщо prevPage не null */}
        <div className={`${css.footerNavBox} ${prevPage ? css.prevlink : ""}`}>
          {prevPage && (
            <NavLink className={css.redirectLink} to={prevPage}>
              <FaAngleDoubleLeft className={css.icon} />
              <div className={css.linkbox}>
                <p>Poprzednia strona</p>
                <p className={css.text}> {prevPageName} </p>
              </div>
            </NavLink>
          )}
          {nextPage ? (
            <NavLink className={css.redirectLink} to={nextPage}>
              <div className={css.linkbox}>
                <p>Następna strona</p>
                <p className={css.text}> {nextPageName} </p>
              </div>
              <FaAngleDoubleRight className={css.icon} />
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={css.footerSocialBox}>
        <ul className={css.list}>
          <li className={css.item}>
            <a  className={css.socialLink} href="https://delab.uw.edu.pl/">
              {" "}
              <TbLetterD />{" "}
            </a>
          </li>
          <li className={css.item}>
            <a  className={css.socialLink} href="https://www.linkedin.com/company/delabuw/mycompany/">
              {" "}
              <SiLinkedin />
            </a>{" "}
          </li>
          <li className={css.item}>
            <a  className={css.socialLink} href="https://www.instagram.com/delabuw/?g=5">
              {" "}
              <FaInstagram />
            </a>
          </li>
          <li className={css.item}>
            <a  className={css.socialLink} href="https://www.youtube.com/channel/UCuImpIgqCAqa-H0KMCJXfGw">
              {" "}
              <IoLogoYoutube />
            </a>
          </li>
          <li className={css.item}>
            <a
              className={css.socialLink}
              href="https://x.com/i/flow/login?redirect_after_login=%2FDELabUW"
            >
              {" "}
              <BsTwitterX />
            </a>
          </li>
          <li className={css.item}>
            <a  className={css.socialLink} href="https://www.facebook.com/DELabUW">
              {" "}
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
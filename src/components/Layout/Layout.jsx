import { Suspense } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import { useScroll, motion, useTransform } from "framer-motion";

// import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ee1a1a84", "#3485C8"]
  );

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,

          transformOrigin: "left",
          // background: "blue",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "4px",
        }}
      />

      <Container>
        <Suspense fallback={<Loader />}>{children}</Suspense>

        {/* <Toaster /> */}
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;

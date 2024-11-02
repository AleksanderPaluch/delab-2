import { Suspense } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const [showProgressBar, setShowProgressBar] = useState(false);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0000008a", "#3485C8"]
  );

  // Додаємо opacity для контролю видимості
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Показати прогрес-бар, як тільки починається скрол
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value > 0 && !showProgressBar) {
        setShowProgressBar(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, showProgressBar]);

  return (
    <>
      {showProgressBar && (
        <motion.div
          style={{
            scaleX: scrollYProgress,
            opacity: opacity, // Додаємо opacity для початкового приховання
            transformOrigin: "left",
            background,
            position: "sticky",
            top: 0,
            width: "99%",
            height: "8px",
          }}
        />
      )}

      <Container>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;

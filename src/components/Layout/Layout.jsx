import { Suspense } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";

// import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <Container>
      <Suspense fallback="loading">{children}</Suspense>
      {/* <Toaster /> */}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;

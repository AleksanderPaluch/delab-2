import { lazy } from "react";

const Hero = lazy(() => import("../../components/Hero/Hero"));
const Recomendations = lazy(() =>
  import("../../components/Recomendations/Recomendations")
);
const Research = lazy(() => import("../../components/Research/Research"));

const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Recomendations />
      <Research />

    </div>
  );
};

export default HomePage;

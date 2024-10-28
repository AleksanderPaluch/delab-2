import { lazy } from "react";
import "./App.css";



import Layout from "./components/Layout/Layout";
import FramerMotionTest from "./components/FramerMotionTest/FramerMotionTest";
import AnimationControls from "./components/FramerMotionTest/AnimationControls";
import BasicsOfMotion from "./components/FramerMotionTest/BasicOfMotin";
import Gestures from "./components/FramerMotionTest/Gestures";
import ScrollAnimations from "./components/FramerMotionTest/ScrollAnimation";
import ViewBasedAnimations from "./components/FramerMotionTest/ViewBaseAnimaions";

// Динамічний імпорт компонентів (lazy loading)
const Home = lazy(() => import("./components/Home/Home"));
const Recomendations = lazy(() =>
  import("./components/Recomendations/Recomendations")
);
const Research = lazy(() => import("./components/Research/Research"));
const DelabResearch = lazy(() =>
  import("./components/Recharts/DelabResearch/DelabResearch")
);

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Recomendations />
        <Research />
       
        <Recomendations />
        <Recomendations />
        {/* <FramerMotionTest /> */}
        {/* <AnimationControls /> */}
        {/* <BasicsOfMotion /> */}
        {/* <Gestures /> */}
        {/* <ScrollAnimations /> */}
        {/* <ViewBasedAnimations /> */}
      </Layout>
    </>
  );
}

export default App;

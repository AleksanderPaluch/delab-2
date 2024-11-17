import { lazy } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Raport from "./components/Raport/Raport";
import Recomendations from "./components/Recomendations/Recomendations";
import Research from "./components/Research/Research";
import GenAI from "./components/GenAI/GenAI";
import Tools from "./components/Tools/Tools";
import Footer from "./components/Footer/Footer";

// const Raport = lazy(() => import("./components/Raport/Raport"));
// const Recomendations = lazy(() =>
//   import("./components/Recomendations/Recomendations")
// );
// const Research = lazy(() => import("./components/Research/Research"));
// const GenAI = lazy(() => import("./components/GenAI/GenAI"));
// const Tools = lazy(() => import("./components/Tools/Tools"));
// const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Raport />
        <Recomendations />
        <Research />
        <GenAI />
        <Tools />
        <Footer />
      </Layout>
    </>
  );
}

export default App;

import { lazy } from "react";
import "./App.css";

import Hero from "./components/Hero/Hero";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Raport = lazy(() => import("./components/Raport/Raport"));
const Recomendations = lazy(() =>
  import("./components/Recomendations/Recomendations")
);
const Research = lazy(() => import("./components/Research/Research"));
const GenAI = lazy(() => import("./components/GenAI/GenAI"));
const Tools = lazy(() => import("./components/Tools/Tools"));
const Footer = lazy(() => import("./components/Footer/Footer"));

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

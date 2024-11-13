import { lazy } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

import Hero from "./components/Hero/Hero";



const Raport = lazy(() => import("./components/Raport/Raport"));
const Recomendations = lazy(() =>
  import("./components/Recomendations/Recomendations")
);
const Research = lazy(() => import("./components/Research/Research"));
const GenAI = lazy(() => import("./components/GenAI/GenAI"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <Layout>
        {/* <Hero />
        <Raport />
        <Recomendations />
        <Research /> */}

        <GenAI />

        <Footer />
     
      </Layout>
    </>
  );
}

export default App;

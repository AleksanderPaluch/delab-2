
import { lazy } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import SideBarNav from "./components/SideBarNav/SideBarNav";


import Hero from "./components/Hero/Hero";

const Recomendations = lazy(() =>
  import("./components/Recomendations/Recomendations")
);
const Research = lazy(() => import("./components/Research/Research"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <SideBarNav />
      <Layout>
        <Hero />
        <Recomendations />
        <Research />
      </Layout>
      <Footer />
    </>
  );
}

export default App;

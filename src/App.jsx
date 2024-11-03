import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import SideBarNav from "./components/SideBarNav/SideBarNav";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";


const Recomendations = lazy(() => import("./components/Recomendations/Recomendations"));
const Research = lazy(() => import("./components/Research/Research"));

function App() {
  return (
    <>  
     <SideBarNav />
      <Layout>
       <Hero/>
       <Recomendations />
       <Research />

      </Layout>
      <Footer />
    </>
  );
}

export default App;

import { lazy } from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";

import { Routes } from "react-router-dom";

// Динамічний імпорт компонентів (lazy loading)
const Home = lazy(() => import("./components/Home/Home"));
const Recomendations = lazy(() =>
  import("./components/Recomendations/Recomendations")
);
const Research = lazy(() => import("./components/Research/Research"));

function App() {
  return (
    <>
      <Layout>
        <Routes>

          
        </Routes>

        <Home />
        <Recomendations />
        <Research />

        <Recomendations />
        <Recomendations />
      </Layout>
    </>
  );
}

export default App;

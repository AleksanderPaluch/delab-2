import { lazy, useRef, useEffect } from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";

// Динамічний імпорт компонентів (lazy loading)
const Home = lazy(() => import("./Home/Home"));
const Recomendations = lazy(() =>
  import("./components/Recomendations/Recomendations")
);
const Research = lazy(() => import("./components/Research/Research"));
const Recharts = lazy(() =>
  import("./components/BadanieRecharts/BadanieRecharts")
);

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Recomendations />
        <Research />
        <Recharts />
      </Layout>
    </>
  );
}

export default App;

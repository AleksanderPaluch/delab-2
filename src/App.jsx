import { lazy } from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";

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
        <DelabResearch />
      </Layout>
    </>
  );
}

export default App;

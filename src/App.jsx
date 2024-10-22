import { lazy, useRef, useEffect } from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";

// Динамічний імпорт компонентів (lazy loading)
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Rekomendacje = lazy(() =>
  import("./components/Rekomendacje/Rekomendacje")
);
const Badanie = lazy(() => import("./components/Badanie/Badanie"));
const Recharts = lazy(() =>
  import("./components/BadanieRecharts/BadanieRecharts")
);

function App() {
  return (
    <>
      <Layout>
        <HomePage />
        <Rekomendacje />
        <Badanie />
        <Recharts />
      </Layout>
    </>
  );
}

export default App;

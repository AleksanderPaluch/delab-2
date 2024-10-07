import "./App.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Header from "./components/Header/Header";

// Використання lazy для динамічного імпорту компонентів
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ReaserchPage = lazy(() => import("./pages/ReaserchPage/ReaserchPage"));
const GuidelinesPage = lazy(() =>
  import("./pages/GuidelinesPage/GuidelinesPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/badanie" element={<ReaserchPage />} />
          <Route path="/wytyczne" element={<GuidelinesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

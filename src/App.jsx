import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import SideBarNav from "./components/SideBarNav/SideBarNav";
import Footer from "./components/Footer/Footer";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AuthorsPage = lazy(() => import("./pages/AuthorsPage/AuthorsPage"));

function App() {
  return (
    <>  
     <SideBarNav />
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors" element={<AuthorsPage />} />
    
          
        </Routes>


      </Layout>
      <Footer />
    </>
  );
}

export default App;

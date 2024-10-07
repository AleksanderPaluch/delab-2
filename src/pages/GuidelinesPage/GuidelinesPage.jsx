import css from "./GuidelinesPage.module.css";
import Page from "../../components/Page/Page";
import Footer from "../../components/Footer/Footer";

const GuidelinesPage = () => {
  return (
    <>
      <Page>
        <h1>Wytyczne</h1>
      </Page>
      <Footer prevPage={"/badanie"} prevPageName={"Badanie"} />
    </>
  );
};

export default GuidelinesPage;

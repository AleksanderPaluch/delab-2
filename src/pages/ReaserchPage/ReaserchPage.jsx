import Footer from "../../components/Footer/Footer";
import Page from "../../components/Page/Page";
import css from "./ReaserchPage.module.css";

const ReaserchPage = () => {
  return (
    <>
      <Page>
        <h1 className={css.title}>Badanie</h1>
      </Page>
      <Footer
        prevPage={"/rekomendacje"}
        prevPageName={"Rekomendacje"}
        nextPage={"/wytyczne"}
        nextPageName={"Wytyczne"}
      />
    </>
  );
};

export default ReaserchPage;

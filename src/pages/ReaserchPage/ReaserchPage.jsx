import Badanie from "../../components/Badanie/Badanie";
import Footer from "../../components/Footer/Footer";
import Page from "../../components/Page/Page";
import css from "./ReaserchPage.module.css";

const ReaserchPage = () => {
  return (
    <>
      <Page>
        <Badanie />
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

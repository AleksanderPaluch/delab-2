import Footer from "../../components/Footer/Footer";
import Page from "../../components/Page/Page";
import Rekomendacje from "../../components/Rekomendacje/Rekomendacje";

const HomePage = () => {
  return (
    <>
      <Page>
        <Rekomendacje />
      </Page>
      <Footer  nextPage={"/badanie"} nextPageName={"Badanie"} />
    </>
  );
};

export default HomePage;

import Footer from "../../components/Footer/Footer";
import Page from "../../components/Page/Page";
import Rekomendacje from "../../components/Rekomendacje/Rekomendacje";

const HomePage = () => {
  return (
    <>
      <Page id1={"Dla całego środowiska UW"} id2={"Dla dydaktyków i dydaktyczek"} id3={"Dla studentów i studentek"} >
        <Rekomendacje />
      </Page>
      <Footer  nextPage={"/badanie"} nextPageName={"Badanie"} />
    </>
  );
};

export default HomePage;

import Page from "../../components/Page/Page";
import brain from "../../../assets/ai-artificial-intelligence-concept-face-outline-vector-24535527.png";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (

      <Page>
        <h1 className={css.title}>
          Przewodnik po bezpiecznym i świadomym korzystaniu z AI na UW,
          obejmujący zasady, etyczne wyzwania oraz praktyczne wskazówki dla
          studentów i wykładowców
        </h1>
        <img className={css.brain} src={brain} alt="" />
      </Page>

  );
};

export default HomePage;

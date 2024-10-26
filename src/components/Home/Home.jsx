import Reveal from "../Reveal/Reveal";
import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.section}>
      <Reveal>
        <h1 className={css.title}>
          Przewodnik po bezpiecznym i świadomym korzystaniu z{" "}
          <span className={css.span1}>AI</span> na{" "}
          <span className={css.span2}>UW</span>
        </h1>
      </Reveal>
      <Reveal>
        {" "}
        <p>
          Pbejmujący zasady, etyczne wyzwania oraz praktyczne wskazówki dla
          studentów i wykładowców
        </p>
      </Reveal>
    </section>
  );
};

export default Home;

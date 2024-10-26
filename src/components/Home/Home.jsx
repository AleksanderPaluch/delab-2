import Reveal from "../Reveal/Reveal";
import css from "./Home.module.css";
import film from "../../../assets/video/ai-data-analytics-line-2d-animation-artificial-intelligence-brain-4k-motion-graphic-machine-learning-cloud-computing-business-analysis-linear-animated-cartoon-flat-concept-white-background-video.webm";

const Home = () => {
  return (
    <section className={css.section}>
      <video autoPlay muted loop playsInline className={css.video}>
        <source src={film} type="video/mp4" />
        Ваш браузер не підтримує відео.
      </video>

      <div className={css.content}>
        <Reveal slide="true">
          <h1 className={css.title}>
            Przewodnik po bezpiecznym i świadomym  korzystaniu z{" "} <br />
            <span className={css.span1}>AI</span> na{" "}
            <span className={css.span2}>UW</span>
          </h1>
        </Reveal>
        <Reveal slide="true">
          {" "}
          <p className={css.text}>
            Obejmujący zasady, etyczne wyzwania oraz praktyczne wskazówki dla
            studentów i wykładowców
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;

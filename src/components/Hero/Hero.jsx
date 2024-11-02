import Reveal from "../Reveal/Reveal";
import css from "./Hero.module.css";
import film from "../../../assets/video/robot_laptop.mp4";

const Hero = () => {
  return (
    <section className={css.section}>
      {/* <video autoPlay muted loop playsInline className={css.video}>
        <source src={film} type="video/mp4" />
      </video> */}

      <div className={css.content}>
        <div>
          <Reveal delay="0">
            <h1 className={css.title}>Przewodnik po bezpiecznym i</h1>
          </Reveal>
          <Reveal>
            <h1 className={css.title}>
              świadomym korzystaniu z <span className={css.span}>AI</span> na{" "}
              <span className={css.span}>UW</span>
            </h1>
          </Reveal>
        </div>

        <Reveal delay="0">
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

export default Hero;

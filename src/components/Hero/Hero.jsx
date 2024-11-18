import Reveal from "../Reveal/Reveal";
import css from "./Hero.module.css";
import SideBarNav from "../SideBarNav/SideBarNav";

const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css.sideBar}>
        <SideBarNav />
      </div>

      <Reveal >
        <h1 className={css.title}>Generatywna AI na UW - dobre praktyki</h1>
      </Reveal>


      <Reveal   >
        <p className={css.text}>
        Przewodnik po bezpiecznym i
        świadomym korzystaniu z AI, obejmujący zasady, etyczne wyzwania oraz praktyczne wskazówki dla
          studentów i wykładowców
        </p>
      </Reveal>
    </section>
  );
};

export default Hero;


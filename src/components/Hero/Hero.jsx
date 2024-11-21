import Reveal from "../Reveal/Reveal";
import css from "./Hero.module.css";
import SideBarNav from "../SideBarNav/SideBarNav";

const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css.sideBar}>
        <SideBarNav />
      </div>


        <h1 className={css.title}>Generatywna AI na UW - dobre praktyki</h1>



        <p className={css.text}>
        Przewodnik po bezpiecznym i
        świadomym korzystaniu z AI, obejmujący zasady, etyczne wyzwania oraz praktyczne wskazówki dla
          studentów i wykładowców
        </p>

    </section>
  );
};

export default Hero;


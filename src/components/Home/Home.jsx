import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>
        Przewodnik po bezpiecznym i świadomym korzystaniu z AI na UW, obejmujący
        zasady, etyczne wyzwania oraz praktyczne wskazówki dla studentów i
        wykładowców
      </h1>
    </section>
  );
};

export default Home;

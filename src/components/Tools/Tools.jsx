import css from "./Tools.module.css";

const Tools = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Wybrane narzędzia oparte na generatywnej AI</h2>
      <p className={css.tetx}>
        Poniżej przedstawiamy listę wybranych narzędzi opartych na generatywnej
        AI, wraz z opisem ich zastosowania. Narzędzia AI wyspecjalizowane do
        konkretnych zadań można również znaleźć tutaj: <a className={css.link} href="https://theresanaiforthat.com/">link</a>
      </p>
    </section>
  );
};

export default Tools;

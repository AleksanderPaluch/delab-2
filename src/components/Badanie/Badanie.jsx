import BadanieRecharts from "../BadanieRecharts/BadanieRecharts";
import css from "./Badanie.module.css";

const Badanie = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title} id="badanie DELab UW">
        {" "}
        O badaniu DELab UW
      </h1>
      <p className={css.item}>
        W marcu 2024 r. zespół DELab UW rozpoczął badanie „Generatywna sztuczna
        inteligencja na UW – możliwości, wyzwania, perspektywy”, skierowane do
        społeczności Uniwersytetu Warszawskiego. Celem było zrozumienie, jak
        osoby związane z UW postrzegają potencjał i wyzwania generatywnej AI
        oraz jak ją wykorzystują w pracy i nauce. Przez cztery miesiące zebrano
        niemal 2000 odpowiedzi, z czego w raporcie analizowane są wyniki od 1778
        studentów, doktorantów i pracowników naukowo-dydaktycznych. Wyniki
        przedstawiono w formie pytań z ankiety, uzupełnionych o rekomendowane
        praktyki.
      </p>
      <p className={css.itemBig}>
        Nasza próba badawcza ma następującą strukture:
      </p>

      <BadanieRecharts />
    </div>
  );
};

export default Badanie;

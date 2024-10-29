
import PieCharts from "../Recharts/DelabResearch/PieCharts";
import TreeCharts from "../Recharts/DelabResearch/treeCharts";
import Reveal from "../Reveal/Reveal";
import css from "./Research.module.css";

const Research = () => {
  return (
    <section className={css.section}>
      <div className={css.box}>
        <Reveal amount="1">
          <h1 className={css.title} id="badanie DELab UW">
            {" "}
            O badaniu DELab UW
          </h1>
        </Reveal>
        <Reveal>
          <p className={css.text}>
            W marcu 2024 r. zespół DELab UW rozpoczął badanie „Generatywna
            sztuczna inteligencja na UW – możliwości, wyzwania, perspektywy”,
            skierowane do społeczności Uniwersytetu Warszawskiego. Celem było
            zrozumienie, jak osoby związane z UW postrzegają potencjał i
            wyzwania generatywnej AI oraz jak ją wykorzystują w pracy i nauce.
            Przez cztery miesiące zebrano niemal 2000 odpowiedzi, z czego w
            raporcie analizowane są wyniki od 1778 studentów, doktorantów i
            pracowników naukowo-dydaktycznych. Wyniki przedstawiono w formie
            pytań z ankiety, uzupełnionych o rekomendowane praktyki.
          </p>
        </Reveal>{" "}
        <p className={css.subTitle}>
          Nasza próba badawcza ma następującą strukture:
        </p>
        <PieCharts />
        {/* <TreeCharts /> */}
      </div>
    </section>
  );
};

export default Research;

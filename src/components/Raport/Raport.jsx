import Reveal from "../Reveal/Reveal";
import css from "./Raport.module.css";
import student from "../../../assets/svg/student.svg";
import phd from "../../../assets/svg/phd.svg";
import prof from "../../../assets/svg/professor.svg";

const Raport = () => {
  return (
    <section className={css.section} id="o-raporcie">
      <Reveal amount="0.99">
        <h1 className={css.title}>O raporcie</h1>
      </Reveal>

      <ul className={css.list}>
        <Reveal>
          {" "}
          <li>
            <p className={css.text}>
              <span className={css.span}>
                W DELab UW transformacją cyfrową zajmujemy się na co dzień.
              </span>
              Jednym z jej najnowszych przejawów jest generatywna sztuczna
              inteligencja (generative AI, genAI) - technologia, której
              przyglądamy się z różnych perspektyw. Za nami pierwsze raporty
              dotyczące generatywnej AI i edukacji, a także dogłębna analiza
              kompetencji potrzebnych w dobie AI w małych i średnich
              przedsiębiorstwach. Badamy, jak pracownicy postrzegają zmiany
              technologiczne, oraz poszukujemy kreatywnych zastosowań
              generatywnej AI w procesach. Przeprowadziliśmy kursy z
              generatywnej AI dla naukowców i administracji Uniwersytetu
              Warszawskiego, a na seminariach DELabu dzielimy się pomysłami na
              zastosowanie modeli AI w pracy.
            </p>
          </li>
        </Reveal>
        <Reveal>
          {" "}
          <li>
            <p className={css.text}>
              <span className={css.span}>
                W tym raporcie prezentujemy zbiór dobrych praktyk
              </span>
              opracowanych na podstawie przeglądu literatury, wytycznych UW oraz
              innych uniwersytetów, badania opinii społeczności UW, a także
              naszego zespołowego doświadczenia w korzystaniu z generatywnej AI.
              Omawiamy między innymi sposoby wykorzystania i cytowania
              generatywnej AI, wyzwania etyczne oraz te związane z prywatnością,
              a także podpowiadamy, skąd czerpać wiedzę o generatywnej AI i
              gdzie szukać wzorów promptów. Liczymy, że nasze rekomendacje, wraz
              z ich uzasadnieniem i praktycznymi wskazówkami, będą przydatne
              zarówno w pracy badawczej i dydaktycznej, jak i w procesie
              studiowania.
            </p>
          </li>
        </Reveal>
        <Reveal>
          <li>
            <p className={css.text}>
              W raporcie publikujemy pierwsze wyniki badania przeprowadzonego
              przez DELab UW wśród społeczności akademickiej UW, w którym
              pytaliśmy{" "}
              <span className={css.span}>
                o opinie, sposoby wykorzystywania, obawy oraz oczekiwania wobec
                generatywnej AI.
              </span>{" "}
              Wyniki te są powiązane z konkretnymi dobrymi praktykami, abyście
              mogli zobaczyć, jak Wasze koleżanki, koledzy, studenci i
              wykładowcy postrzegają i wykorzystują generatywną AI. Raport ma
              formę interaktywnej strony internetowej, którą planujemy
              regularnie aktualizować w miarę rozwoju narzędzi generatywnej AI i
              zmieniających się regulacji.
            </p>
          </li>
        </Reveal>
      </ul>

      <h2 className={css.subTitle}>
        {" "}
        W raporcie stosujemy następujące oznaczenia dla poszczególnych grup
        społeczności akademickiej UW:
      </h2>
      <ul className={css.iconsList}>
        <Reveal>
          {" "}
          <li className={css.item}>
            <img className={css.icon} src={student} alt="student" />
            <p className={css.label}>Studenci i studentki</p>
          </li>{" "}
        </Reveal>
        <Reveal>
          {" "}
          <li className={css.item}>
            {" "}
            <img className={css.icon} src={phd} alt="Badacze i badaczki" />
            <p className={css.label}>Badacze i badaczki</p>
          </li>{" "}
        </Reveal>
        <Reveal>
          {" "}
          <li className={css.item}>
            {" "}
            <img
              className={css.icon}
              src={prof}
              alt="Dydaktycy i dydaktyczki"
            />
            <p className={css.label}>Dydaktycy i dydaktyczki</p>
          </li>
        </Reveal>
      </ul>
    </section>
  );
};

export default Raport;

import css from "./DelabResearch.module.css";
import { useInView } from "react-intersection-observer";

import PositionPieChart from "./PositionPieChart";
import AgePieChart from "./AgePieChart";
import GenderPieChart from "./GenderPieChart";
import FieldTreemap from "./FieldTreemap";

const DelabResearch = () => {
  const { ref, inView } = useInView();

  console.log(inView);

  return (
    <section ref={ref} className={css.section}>
      <div className={css.box}>
        <PositionPieChart inView={inView} />

        <AgePieChart inView={inView} />

        <GenderPieChart inView={inView} />
      </div>
      <div className={css.box}>
      <FieldTreemap  inView={inView} />
      </div>
      
    </section>
  );
};

export default DelabResearch;

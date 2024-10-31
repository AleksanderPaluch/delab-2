import { useInView } from "react-intersection-observer";
import css from "./TreeCharts.module.css";

import FieldTreemap from "./FieldTreemap";
import FrequencyTreemap from "./FrequencyTreemap";

const TreeCharts = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={css.section}>
      <div className={css.box}>
        <FieldTreemap inView={inView} />
      </div>
      <div className={css.box}>
        <FrequencyTreemap inView={inView} />
      </div>
    </section>
  );
};

export default TreeCharts;

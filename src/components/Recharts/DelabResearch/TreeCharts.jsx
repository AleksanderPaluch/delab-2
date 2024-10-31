import { useInView } from "react-intersection-observer";
import css from "./TreeCharts.module.css";

import FieldTreemap from "./FieldTreemap";
import FrequencyTreemap from "./FrequencyTreemap";

const TreeCharts = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={css.section}>
    
        <FieldTreemap inView={inView} />

        <FrequencyTreemap inView={inView} />
   
    </section>
  );
};

export default TreeCharts;

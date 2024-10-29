import css from "./PieCharts.module.css";
import { useInView } from "react-intersection-observer";

import PositionPieChart from "./PositionPieChart";
import AgePieChart from "./AgePieChart";
import GenderPieChart from "./GenderPieChart";

const PieCharts = () => {
  const { ref, inView } = useInView();

 

  return (
    <section ref={ref} className={css.section}>
     
        <PositionPieChart inView={inView} />

        <AgePieChart inView={inView} />

        <GenderPieChart inView={inView} />
     
    </section>
  );
};

export default PieCharts;

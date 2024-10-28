import css from "./DelabResearch.module.css";
import { useInView } from "react-intersection-observer";



import FieldRecharts from "./FieldRecharts";
import PositionPieChart from "./PositionPieChart";
import AgePieChart from "./AgePieChart";
import GenderPieChart from "./GenderPieChart";

const DelabResearch = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={css.section}>
      <div className={css.rechartsBox}>
        <PositionPieChart inView={inView} />

        <AgePieChart inView={inView} />

        <GenderPieChart inView={inView} />
      </div>
      {/* <div className={css.pieBox}>
        <FieldRecharts inView={inView} />
        <FieldRecharts inView={inView} />
      </div> */}
    </section>
  );
};

export default DelabResearch;

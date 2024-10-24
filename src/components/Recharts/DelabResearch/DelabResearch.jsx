import css from "./DelabResearch.module.css";
import { useInView } from "react-intersection-observer";

import GenderRechart from "./GenderRechart";
import PositionRechart from "./positionRechart";
import AgeReachart from "./AgeReachart";

const DelabResearch = () => {
  const { ref, inView } = useInView();
console.log(ref);
  return (
    <section ref={ref} className={css.section}>
      <div className={css.rechartsBox}>
        <div className={css.occupancyBox}>
          <PositionRechart inView={inView} />
        </div>

        <div className={css.statsBox}>
          <div className={css.smallBox}>
            <AgeReachart inView={inView} />
          </div>
          <div className={css.smallBox}>
            <GenderRechart inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DelabResearch;

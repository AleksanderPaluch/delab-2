import css from "./loader.module.css";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loader}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#3485C8"
        secondaryColor="#222222"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
};

export default Loader;


import Rekomendacje from '../../components/Rekomendacje/Rekomendacje'
import css from "./HomePage.module.css"
const HomePage = () => {
  return (
    <div className={css.homeBox}>
    <div className={css.leftBox}></div>
      <Rekomendacje />
      <div className={css.rightBox}></div>
    </div>
  )
}

export default HomePage

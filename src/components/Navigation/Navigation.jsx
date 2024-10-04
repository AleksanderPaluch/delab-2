
import './Navigation.module.css'; 
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Rekomendacje</Link>
        </li>
        <li className="navbar-item">
          <Link to="/badanie">Badanie DELab UW</Link>
        </li>
        <li className="navbar-item">
          <Link to="/wytyczne">Wytyczne</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact="true"
      className={navData => (navData.isActive ? 'active' : 'noActive')}
      to="/"
    >
      Home
    </NavLink>

    <NavLink
      className={navData => (navData.isActive ? 'active' : 'noActive')}
      to="/movies"
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;

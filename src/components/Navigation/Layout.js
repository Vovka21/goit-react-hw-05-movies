import { Outlet, NavLink } from 'react-router-dom';
import './Navigation.css';

export const Layout = () => {
  return (
    <div>
      <nav className="header">
        <NavLink
          // exact="true"
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
      <Outlet />
    </div>
  );
};

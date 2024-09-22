import { Outlet } from 'react-router-dom';
import './layout.sass';

export default function Layout() {
  return (
    <div id='navbar-container'>
      <nav>olamundo</nav>
      <Outlet />
    </div>
  );
}


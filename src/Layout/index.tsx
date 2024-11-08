import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div id='navbar-container'>
      <nav className='navbar'>olamundo</nav>
      <div id='outlet_container'>
        <Outlet />
      </div>
    </div>
  );
}

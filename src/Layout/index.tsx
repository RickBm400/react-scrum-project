import { Outlet } from 'react-router-dom';
import '../sass/folders/layout.sass';

export default function Layout() {
  return (
    <div id='navbar-container'>
      <nav>_____</nav>
      <Outlet />
    </div>
  );
}

import { useCallback, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const pathArray = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    active: false,
  },
  {
    label: 'Backlog',
    path: '/backlog',
    active: false,
  },
];

export default function Layout() {
  const location = useLocation();
  const [routePaths, setRoutePaths] = useState(pathArray);

  const activePath = useCallback((pathname = '/dashboard') => {
    setRoutePaths((prevPath) =>
      [...prevPath].map((route) => {
        return { ...route, active: route.path === pathname };
      }),
    );
  }, []);

  useEffect(() => {
    activePath(location.pathname);
  }, [location.pathname, activePath]);

  return (
    <div id='navbar-container'>
      <nav className='navbar'>
        <ul>
          {routePaths.map(({ label, path, active = false }, i) => {
            return (
              <li
                className={`link ${active ? 'active' : ''}`}
                onClick={() => activePath(path)}
                key={i}
              >
                <Link to={path}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div id='outlet_container'>
        <Outlet />
      </div>
    </div>
  );
}

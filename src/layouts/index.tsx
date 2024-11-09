import { useCallback, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';

const pathArray = [
  {
    label: 'Backlog',
    path: '/backlog',
    active: false,
  },
  {
    label: 'Dashboard',
    path: '/dashboard',
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
        <div>
          {routePaths.map(({ label, path, active = false }, i) => {
            return (
              <Link
                to={path}
                key={i}
                onClick={() => activePath(path)}
                className={`link ${active ? 'active' : ''}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className='handle__menu'>
          <Icon path={mdiDotsHorizontal} size={1} />
        </div>
      </nav>
      <div id='outlet_container'>
        <Outlet />
      </div>
    </div>
  );
}

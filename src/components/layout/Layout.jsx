import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Heder from 'components/heder';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <Heder />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

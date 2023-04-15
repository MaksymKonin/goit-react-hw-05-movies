import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Heder from 'components/heder';
import Loader from 'components/loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <Heder />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

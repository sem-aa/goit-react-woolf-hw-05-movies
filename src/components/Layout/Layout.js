import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { Loading } from 'components/Loading/Loading';

const Layout = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>{' '}
        <Link to="/movies" className={styles.link}>
          Movies
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

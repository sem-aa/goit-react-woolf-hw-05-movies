import { Link, useLocation } from 'react-router-dom';
import styles from './ListMovies.module.css';

export const ListMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, title, name }) => (
        <Link
          to={`/movies/${id}`}
          state={{ from: location }}
          key={id}
          className={styles.movieLink}
        >
          <li className={styles.movieItem}>{title ?? name}</li>{' '}
        </Link>
      ))}
    </ul>
  );
};

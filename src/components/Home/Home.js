import { ListMovies } from 'components/ListMovies/ListMovies';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { getTrendingMovies } from 'services/apiMovie';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.homeTitle}>Trending today</h2>
      <ListMovies movies={movies} />
    </div>
  );
};

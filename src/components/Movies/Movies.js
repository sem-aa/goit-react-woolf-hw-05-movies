import { ListMovies } from 'components/ListMovies/ListMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Movies.module.css';
import { searchMovie } from 'services/apiMovie';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query');

    if (queryParam) {
      searchMovie(queryParam)
        .then(data => setMovies(data.results))
        .catch(error => console.error(error));
    }
  }, [searchParams, query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  return (
    <div className={styles.moviesContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {movies.length > 0 && <ListMovies movies={movies} />}
    </div>
  );
};

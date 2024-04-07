import { Suspense, useEffect, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { getMovieById } from 'services/apiMovie';
import { Loading } from 'components/Loading/Loading';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [movieId]);

  if (movie)
    return (
      <div className={styles.movieContainer}>
        <Link to={location?.state?.from ?? '/'} className={styles.goBackLink}>
          go back
        </Link>
        <div className={styles.imgContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={'poster'}
            className={styles.moviePoster}
          />
          <div>
            <h3 className={styles.movieTitle}>{movie.title ?? movie.name}</h3>

            <p className={styles.userScore}>
              User Score {Math.ceil(movie.vote_average * 10)}%
            </p>
            <div className={styles.overviewSection}>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div className={styles.genresSection}>
              <h3>Genres</h3>
              <ul className={styles.genresList}>
                {movie.genres.map(({ name, id }) => (
                  <li key={id} className={styles.genresItem}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.additionalInfoSection}>
          <h3>Additional information</h3>
          <ul className={styles.additionalInfoList}>
            <li className={styles.additionalInfoItem}>
              <Link
                to="cast"
                state={{ from: location }}
                className={styles.additionalInfoLink}
              >
                Cast
              </Link>
            </li>
            <li className={styles.additionalInfoItem}>
              <Link
                to="reviews"
                state={{ from: location }}
                className={styles.additionalInfoLink}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    );
};

export default MovieDetails;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';
import { getActorsMovie } from 'services/apiMovie';
import noFoto from '../../img/no_foto.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActorsMovie(movieId)
      .then(data => setCast(data.cast))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id} className={styles.castItem}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : noFoto
            }
            alt="actor"
            className={styles.actorImage}
          />
          <p className={styles.actorName}>{name}</p>
          <p className={styles.characterName}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

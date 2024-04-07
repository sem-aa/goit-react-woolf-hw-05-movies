import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';
import { getReviewsMovie } from 'services/apiMovie';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsMovie(movieId)
      .then(data => setReviews(data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul className={styles.reviewsList}>
      {reviews.length ? (
        reviews.map(({ id, author, content }) => (
          <li key={id} className={styles.reviewItem}>
            <h4 className={styles.authorName}>{author}</h4>
            <p className={styles.reviewContent}>{content}</p>
          </li>
        ))
      ) : (
        <h3>No reviews for this movie</h3>
      )}
    </ul>
  );
};

export default Reviews;

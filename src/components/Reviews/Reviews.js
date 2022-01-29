import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as MoviesAPI from '../../services/MoviesAPI';
import styles from './Reviews.module.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    MoviesAPI.fetchReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <ul className={styles.list}>
        {reviews
          ? reviews.length > 0
            ? reviews.map(review => (
                <li key={review?.id} className={styles.listItem}>
                  <div className={styles.user}>
                    {review.author_details.avatar_path ? (
                      <img
                        src={
                          review.author_details.avatar_path.includes('http')
                            ? review.author_details.avatar_path.slice(1)
                            : 'https://image.tmdb.org/t/p/w300' +
                              review?.author_details.avatar_path
                        }
                        alt={review?.author}
                        width="80px"
                      />
                    ) : null}

                    <div>
                      <p>NickName:</p> {review?.author}
                    </div>
                  </div>
                  <div>
                    <p>Review:</p> {review?.content}
                  </div>
                </li>
              ))
            : "We don't have any reviews for this movie"
          : null}
      </ul>
    </>
  );
}

export default Reviews;

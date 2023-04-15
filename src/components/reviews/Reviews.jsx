import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api.js';
import Message from 'components/message';
import Loader from 'components/loader';

import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (movieId === '') return;
    setIsLoading(true);
    async function getReviews() {
      try {
        const { results } = await fetchReviews(`${movieId}`);
        setReviews(results);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <Message>
          An error occurred, please reload the page or try again later.
        </Message>
      )}
      <ul className={css.review}>
        {reviews?.length === 0 && <h3>There are no reviews</h3>}
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id} className={css.item}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;

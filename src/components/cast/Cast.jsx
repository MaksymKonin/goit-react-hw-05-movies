import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api.js';
import Message from 'components/message';
import Loader from 'components/loader';

import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (movieId === '') return;
    setIsLoading(true);

    async function getCast() {
      try {
        const { cast } = await fetchCast(`${movieId}`);
        setCast(cast);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <Message>
          An error occurred, please reload the page or try again later.
        </Message>
      )}
      <ul className={css.cast}>
        {cast?.length === 0 && <h3>There is no information</h3>}
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id} className={css.item}>
              <img
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt="profile"
                width="150"
                height="225"
              />
              <b>{name}</b>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;

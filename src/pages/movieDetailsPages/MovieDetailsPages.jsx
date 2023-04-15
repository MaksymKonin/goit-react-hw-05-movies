import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'api.js';
import BackLink from 'components/backLink/BackLink';
import Message from 'components/message';
import Loader from 'components/loader';

import css from './MovieDetailsPages.module.css';

const MovieDetailsPages = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (movieId === '') return;
    setIsLoading(true);
    try {
      async function getMovieById() {
        const dataMovie = await fetchMovieById(`${movieId}`);
        setDataMovie(dataMovie);
      }
      getMovieById();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  const {
    poster_path,
    release_date,
    title,
    vote_average,
    popularity,
    overview,
    genres,
  } = dataMovie;

  const noData = 'has no data';
  const img = `https://image.tmdb.org/t/p/original${poster_path}`;
  const data = release_date?.slice(0, 4) ? release_date?.slice(0, 4) : noData;
  const genresNew = [];
  genres?.forEach(element => {
    genresNew.push(element.name);
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <Message>
          An error occurred, please reload the page or try again later.
        </Message>
      )}
      <BackLink to={backLinkHref}>Back to list movies</BackLink>
      <div className={css.wrapper}>
        <div className={css[`thumb-img`]}>
          <img className={css.img} src={img} alt="poster fath" width="300" />
        </div>
        <div className={css.summary}>
          <h2>
            {title ? title : noData} ({data})
          </h2>
          <p>Popularity - {popularity ? popularity : 0}</p>
          <p>Vote average - {vote_average ? vote_average : 0}</p>
          <h3>Overview</h3>
          <p>{overview ? overview : noData}</p>
          <h3>Genres</h3>
          <p>{genresNew?.join(', ') ? genresNew?.join(', ') : noData}</p>
        </div>
      </div>
      <ul className={css.navigation}>
        <li>
          <NavLink to="cast" className={css.link}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={css.link}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPages;

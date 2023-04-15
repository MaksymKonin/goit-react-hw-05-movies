import { fetchTrendingMoviesDay } from 'api.js';
import { useState, useEffect } from 'react';

// import css from './HomePages.module.css';
import ListMovies from 'components/listMovies';
import Message from 'components/message';
import Loader from 'components/loader';

const HomePages = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      async function getTrendingMoviesDay() {
        const newMovies = await fetchTrendingMoviesDay();
        setMovies(newMovies);
      }
      getTrendingMoviesDay();
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ListMovies movies={movies} />
      {isLoading && <Loader />}
      {isError && (
        <Message>
          An error occurred, please reload the page or try again later.
        </Message>
      )}
    </>
  );
};
export default HomePages;

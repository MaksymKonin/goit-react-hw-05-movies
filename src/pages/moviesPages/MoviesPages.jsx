import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'api.js';
import ListMovies from 'components/listMovies';
import Message from 'components/message';
import Loader from 'components/loader';

import css from './MoviesPages.module.css';

const MoviesPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(searchQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (searchValue === '' && searchQuery !== '') {
      setSearchParams({});
      setMovies([]);
    }
  }, [searchValue, setSearchParams, searchQuery]);

  useEffect(() => {
    if (searchQuery === '') return;
    setIsLoading(true);
    try {
      async function fetchSearchQuery() {
        const newMovies = await fetchSearchMovies(searchQuery);
        setMovies(newMovies);
      }
      fetchSearchQuery();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchValue.trim() });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button disabled={isLoading} type="submit" className={css.btn}>
          Search
        </button>
      </form>
      {isLoading && <Loader />}
      {isError && (
        <Message>
          An error occurred, please reload the page or try again later.
        </Message>
      )}
      {movies?.length > 0 && <ListMovies movies={movies} />}
      {movies?.length === 0 && searchQuery !== '' && (
        <h3>Nothing was found for your request</h3>
      )}
    </>
  );
};
export default MoviesPages;

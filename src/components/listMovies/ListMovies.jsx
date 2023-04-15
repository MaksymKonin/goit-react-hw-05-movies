import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './ListMovies.module.css';

const ListMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <ol className={css.list}>
      {movies.map(({ id, title }) => {
        return (
          <Link state={{ from: location }} key={id} to={`/movies/${id}`}>
            <li>{title}</li>
          </Link>
        );
      })}
    </ol>
  );
};
export default ListMovies;

ListMovies.propTypes = {
  dataTransactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Heder.module.css';

const Heder = () => {
  return (
    <div className={css.container}>
      <ul className={css.navigation}>
        <li>
          <NavLink to={'/'} className={css.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/movies'} className={css.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
// };
export default Heder;

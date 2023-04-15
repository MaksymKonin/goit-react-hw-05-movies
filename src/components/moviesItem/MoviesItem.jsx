// import PropTypes from 'prop-types';

import css from './MoviesItem.module.css';

export default function MoviesItem({ title }) {
  return (
    <>
      <li className={css.imageGalleryItem}>{title}</li>
    </>
  );
}

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
// };

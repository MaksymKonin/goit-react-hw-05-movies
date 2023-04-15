import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <Link className={css.backLink} to={to}>
      <FaArrowLeft />
      {children}
    </Link>
  );
};
export default BackLink;

BackLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.object.isRequired,
};

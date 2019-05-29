import React from 'react';
import PropTypes from 'prop-types';
import ChildItem from './Child';

const ChildFeed = ({ children }) => children.map(child => <ChildItem child={child} />);

ChildFeed.defaultProps = {
  articles: [],
};

ChildFeed.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
};
export default ChildFeed;

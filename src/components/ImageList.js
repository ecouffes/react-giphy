import React from 'react';
import PropTypes from 'prop-types';

const ImageList = ({ urlList }) => {
  const listItems = urlList.map(url => {
    return (
      <li className="item" key={url}>
        <img className="image" src={url} alt="" />
      </li>
    );
  });
  return <ul className="list">{listItems}</ul>;
};

ImageList.propTypes = {
  urlList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ImageList;

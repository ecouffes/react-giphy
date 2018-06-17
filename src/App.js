import React, { Fragment } from 'react';
import ImageList from './containers/ImageList';
import Search from './containers/Search';

const App = () => {
  return (
    <Fragment>
      <Search />
      <ImageList />
    </Fragment>
  );
};

export default App;

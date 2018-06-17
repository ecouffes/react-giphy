import { connect } from 'react-redux';
import Search from '../components/Search';

import { getUrls } from '../actions';

const mapStateToProps = state => {
  return {
    buttonText: state.buttonText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUrls: search => {
      dispatch(getUrls(search));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

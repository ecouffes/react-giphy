import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getUrls(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            value={this.state.search}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value={this.props.buttonText} />
        </form>
      </Fragment>
    );
  }
}

Search.propTypes = {
  getUrls: PropTypes.func.isRequired,
};

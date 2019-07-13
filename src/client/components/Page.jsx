import React, { Component } from 'react';
import Entry from './Entry';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePageClick() {}
  render() {
    return <Entry data={this.props.data} />;
  }
}

export default Page;

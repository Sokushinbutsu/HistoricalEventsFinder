import React, { Component } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let results = this.props.data.map(function(item, index) {
      return <div key={index}>{item.description}</div>;
    });

    return <ul>{results}</ul>;
  }
}

export default Entry;

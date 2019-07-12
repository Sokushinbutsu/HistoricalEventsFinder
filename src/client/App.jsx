import React from 'react';
import Page from './components/Page.jsx';
import Search from './components/Search.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    Axios.get('/events', {
      params: {
        q: this.state.value
      }
    })
      .then(data => {
        this.setState({
          data: data.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />{' '}
        <Page />
      </>
    );
  }
}

export default App;

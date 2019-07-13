import React from 'react';
import Page from './components/Page.jsx';
import Search from './components/Search.jsx';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        _page: 1,
        q: '',
        _limit: 10
      },
      perPage: 10,
      results: [],
      pages: 0,
      searched: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleChange(event) {
    event.persist();
    this.setState(state => ({
      params: {
        ...state.params,
        q: event.target.value
      }
    }));
  }

  refreshData(q) {
    Axios.get('/events', {
      params: this.state.params
    })
      .then(({ data, headers }) => {
        let pages = Math.ceil(parseInt(headers['x-total-count']) / 10);
        this.setState({ pages: pages, results: data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handlePageChange({ selected }) {
    const p = Object.assign({}, this.state.params);
    p._page = selected + 1;
    this.setState({ params: p });
    this.refreshData();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.refreshData();
  }

  render() {
    return (
      <>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          q={this.state.params.q}
        />{' '}
        <Page data={this.state.results} />
        <ReactPaginate
          pageCount={this.state.pages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default App;

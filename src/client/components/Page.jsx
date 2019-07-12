import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Entry from './Entry';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePageClick() {}
  render() {
    return (
      <>
        <Entry data={this.props.data} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </>
    );
  }
}

export default Page;

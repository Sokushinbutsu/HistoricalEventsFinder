import React from 'react';

const Search = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={props.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;

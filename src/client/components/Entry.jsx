import React from 'react';

const Entry = props => {
  return (
    <>
      <b>{props.data.year}</b>
      <p>{props.data.description}</p>
    </>
  );
};

export default Entry;

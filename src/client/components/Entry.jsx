import React, { Component } from 'react';

// class Entry extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     let results = this.props.data.map(function(item, index) {
//       return (
//         <div key={index}>
//           <b>{new Date(item.date).toString()}</b>
//           <p>{item.description}</p>
//         </div>
//       );
//     });

//     return <ul>{results}</ul>;
//   }
// }

const Entry = props => {
  let results = props.data.map(function(item, index) {
    return (
      <div key={index}>
        <b>{new Date(item.date).toString()}</b>
        <p>{item.description}</p>
      </div>
    );
  });

  return <ul>{results}</ul>;
};

export default Entry;

// export default Entry;

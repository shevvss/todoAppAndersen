import React from 'react';

function Test({ string, number, obj: { name, age }, func }) {
  return (
    <div>
      <p>String props: {string}</p>
      <p>Number props: {number}</p>
      <p>
        Object props: My name is {name}. My age is {age}
      </p>
      <p>Function props: {func}</p>
    </div>
  );
}

// class Third extends React.Component {
//   render() {
//     const {
//       string,
//       number,
//       obj: { name, age },
//       func,
//     } = this.props;

//     return (
//       <div>
// <p>String props: {string}</p>
// <p>Number props: {number}</p>
// <p>
//   Object props: My name is {name}. My age is {age}
// </p>
// <p>Function props: {func}</p>
//       </div>
//     );
//   }
// }

export default Test;

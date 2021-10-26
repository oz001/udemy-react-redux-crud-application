import React, { Component } from 'react';


// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="bar">bar</label>
//        <input type="text" onClick ={() => {console.log("I am clikecd.")}} />
//      </>
//     )
//   }
// }

const App = () => {
  return <>
    <div>Hi!</div>
    <Cat />
    <Cat />
  </>
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;

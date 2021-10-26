import React, { Component } from 'react';


class App extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="bar">bar</label>
       <input type="text" onClick ={() => {console.log("I am clikecd.")}} />
     </>
    )
  }
}

export default App;

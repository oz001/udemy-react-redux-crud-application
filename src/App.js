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

const profiles = [
  {name: "Taro", age: 10},
  {name: "Hanako", age: 11},
  {name: "TEST"}
]
const App = () => {
  return <>
    <div>
      {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>;
      })
    }
    </div>
  </>
}

const User = (props) => {
  return <div>Hi, I am {props.name} and {props.age} years old! </div>
}
User.defaultProps = {
  age: "1"
};
export default App;

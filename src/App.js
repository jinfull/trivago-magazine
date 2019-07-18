// import React from 'react';
// import './App.css';

// class App extends React.Component {
  


//   render() {
//     return (
//       <div>hello</div>
//     )
//   }
// }

// export default App;


import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }
  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => console.log(data));
      // .then(data => this.setState({ data }))
      // .catch(error => alert(error.message));
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {/* {this.state.users.map(user =>
          <div key={user.id}>user: {user.name} Password: {user.password}</div>
        )} */}
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm/LoginForm";
// import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
        {/*</header>*/}
        <LoginForm/>

          {/*<Switch>*/}
              {/*<Route path="/login" exact component={LoginForm} />*/}
          {/*</Switch>*/}
      </div>
    );
  }
}

export default App;

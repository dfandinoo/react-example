import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import Home from './pages/home';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Home></Home>
      </MuiThemeProvider>
    );
  }
}

export default App;

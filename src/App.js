import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import React, { Fragment } from 'react'
import './App.css';
import Header from './components/header.components';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
      <Header name="Header">Aplikacja</Header>
      <Link to="/About">Treść</Link>
      <Link to="/Home">Nazwa Aplikacjia</Link>
      <Link to="/Contact">O Nas</Link>
      <Fragment>
        <p>foo</p>
        <p>bar</p>
      </Fragment>

        
      </div>
    );
  }
}

export default App;

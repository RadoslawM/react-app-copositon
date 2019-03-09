import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
      <Link to="/About">Treść</Link>
      <Link to="/Home">Nazwa Aplikacjia</Link>
      <Link to="/Contact">O Nas</Link>

        
      </div>
    );
  }
}

export default App;

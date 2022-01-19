import React from 'react';
import Home from './views/Home';
import DisplayOne from './components/DisplayOne';
import {Router} from '@reach/router';


function App() {

  return (
    <div className="App">
      <Router>
        <Home path = "/" />
        <DisplayOne path = "/products/:id"/>
      </Router>
    </div>
  );
}

export default App;

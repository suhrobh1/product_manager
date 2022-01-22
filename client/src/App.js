import React from 'react';
import Home from './views/Home';
import DisplayOne from './components/DisplayOne';
import {Router} from '@reach/router';
import Update from './components/Update';
import UpdateSubmitFeedback from './components/UpdateSubmitFeedback';


function App() {

  return (
    <div className="App">
      <Router>
        <Home path = "/" />
        <DisplayOne path = "/products/:id"/> 
        <Update path = "/products/update/:id"/>
        <UpdateSubmitFeedback path = "/products/update/submit/:id"/>
      </Router>
    </div>
  );
}

export default App;

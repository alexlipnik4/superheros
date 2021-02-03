import React, {useContext} from 'react';
import { AuthContext } from './Context/AuthContext';

import Home from './Components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />

    </Router>
  );
}

export default App;

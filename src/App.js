import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Signup from './components/pages/Signup';

import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/signup"><Signup /></Route>  
      </switch>

      </div>
    </Router>
  );
}

export default App;

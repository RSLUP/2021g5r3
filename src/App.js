import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Quiz from './components/pages/Quiz';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/Quiz"><Quiz /></Route>
        <Route path="/Signup"><Signup /></Route>  
        <Route path="/Login"><Login /></Route>  
      </Switch>
      </div>
    </Router>
    

  );
}

export default App;

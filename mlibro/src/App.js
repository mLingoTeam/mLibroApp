import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Mainpage from './pages/Mainpage';
import Taskpage from './pages/Taskpage';
import Formular from './pages/Formular';
import Todaypage from './pages/Todaypage'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';

function App() {

  return (
    <Router>
        <div className="App">
          <Route exact path="/" component={Formular}/>
          <Route exact path="/today" component={Todaypage}/>
          <Route exact path="/zadania" component={Mainpage}/>
          <Route path="/zadania/:task_id" component={Taskpage}/>
        </div>
    </Router>

  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail'
import EmailList from './components/EmailList/EmailList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
    <Header/>
    <div className="app__body">
        <Sidebar />
    <Switch>
          <Route path="/mail" component={Mail}/>
          <Route path="/" component={EmailList} />
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;

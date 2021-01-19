import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail'
import EmailList from './components/EmailList/EmailList'
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SendMail from './components/SendMail/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {

const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
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
    { sendMessageIsOpen && <SendMail/>}
    {/* <SendMail/> */}
    </div>
    </Router>
  );
}

export default App;

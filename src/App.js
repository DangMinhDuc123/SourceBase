import './App.css';
import React, { useState } from 'react';
import Language from './i18n/Language/index'
import { AppWrapper } from './components/Style/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect,
  BrowserRouter
} from "react-router-dom";
import Header from './components/Header/index'

const Photo = React.lazy(() => import('./features/photo'));

function App() {
  const [isDisplayHeader, setIsDisplayHeader] = useState(true);
  const elementHeader = isDisplayHeader ? <Header /> : '';

  const onToggleHeader = () => {
    isDisplayHeader ? setIsDisplayHeader(false) : setIsDisplayHeader(true);
  }
  return (
    <>
      <AppWrapper>
        {elementHeader}
        <div><button type="button" className="btn btn-danger" onClick={() => onToggleHeader()}>Option Header</button></div>
        <Language />
        <BrowserRouter>
          <ul>
            <li><Link to="photos">Go to Main Page</Link></li>
            <li><Link to="photos/add">Go to Add Page</Link></li>
          </ul>
          <Switch>
            <Redirect exact from="/" to="photos" />
            <Route path="/photos" component={Photo}>
            </Route>
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}

export default App;

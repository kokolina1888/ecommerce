import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import ShopPage from './pages/shop'
import { Switch, Route } from 'react-router-dom';
import Header from './components/header'



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

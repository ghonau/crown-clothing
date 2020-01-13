import React from 'react';
import HomePage from './pages/home/homepage.component'; 
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import './App.css';

  
function App() {
  return (
    <Switch>
      <Route exact path='/' component = {HomePage} />      
      <Route exact path='/shop' component = {ShopPage} />

    </Switch>
    
  );
}

export default App;

import React from 'react';
import HomePage from './pages/homepage.component'; 
import {Route, Switch} from 'react-router-dom';
import './App.css';
const HatsPage = (props) =>
{
  console.log(props)
  return (    
    <div>      
      <h1>{`HATS Page ${props.match.url}`}</h1>
    </div>
  );
}
  
function App() {
  return (
    <Switch>
      <Route exact path='/' component = {HomePage} />
      <Route exact path='/HATS' component = {HatsPage} />
    </Switch>
    
  );
}

export default App;

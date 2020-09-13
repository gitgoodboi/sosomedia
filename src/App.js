import React from 'react';
import './App.css';
import Profilebar from '../src/Profilebar';
import './tailwind.css';
import Navbar from '../src/Components/Navbar'
import NavbarMobile from './../src/Components/Navbar/NavbarMobile'
import Homepage from './Homepage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className='maindiv' className='h-screen'>
        <Navbar/>
        <NavbarMobile />
        <Switch>
        <Route path='/sosomedia' component={Homepage} />
        <Route path='/profile' component={Profilebar} />
        </Switch>
      
      </div>
      </Router>

  );
}

export default App;

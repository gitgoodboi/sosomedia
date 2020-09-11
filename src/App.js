import React from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar'
import './tailwind.css'
import NavbarMobile from './../src/Components/Navbar/NavbarMobile'
import Storyline from './../src/Components/Storyline'
import Timeline from './Components/Timeline'

function App() {
  return (

      <div className='maindiv h-screen'>
        
        <NavbarMobile />

        <Storyline />
        
        <Timeline />

        {/* <section class='relative' >
          <h1>TIMELINE</h1>
        </section> */}

          <Navbar />
       
      </div>

  );
}

export default App;

import React from 'react';
import './App.css';
import Profilebar from '../src/Profilebar';
import './tailwind.css';
import Navbar from '../src/Components/Navbar'
import NavbarMobile from './../src/Components/Navbar/NavbarMobile'
import Timeline from './Components/Timeline'

function App() {
  return (

      <div className='maindiv' className='h-screen'>

        <NavbarMobile />

        <Timeline />

        {/* <section class='relative' >
          <h1>TIMELINE</h1>
        </section> */}

      <Profilebar />

      <Navbar/>


      </div>

  );
}

export default App;

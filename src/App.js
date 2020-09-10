import React from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar'
import './tailwind.css'
import NavbarMobile from './../src/Components/Navbar/NavbarMobile'

function App() {
  return (

      <div className='maindiv' className='h-screen'>
        <NavbarMobile />
        {/* <section class='relative' >
          <h1>TIMELINE</h1>
        </section> */}

          <Navbar />
       
      </div>

  );
}

export default App;

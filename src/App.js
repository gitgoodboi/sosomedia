import React from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar'
import './tailwind.css'
import NavbarMobile from './Components/Navbar/NavbarMobile'
import Timeline from './Components/Timeline'

function App() {
  return (

      <div className='maindiv' className='h-screen'>

          <NavbarMobile />

        <section className='story absolute' >
          {/* STORY BAR */}
        </section>

        <section className='timeline absolute' >
          <Timeline />
        </section>
        
          <Navbar />
       
      </div>

  );
}

export default App;

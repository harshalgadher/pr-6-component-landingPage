import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Hero_sec } from './components/Hero_sec';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero_sec />
    </div>
  )
}

export default App
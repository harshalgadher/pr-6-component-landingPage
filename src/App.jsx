import React from 'react'
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Hero_sec } from './components/Hero_sec';
import { Counter_section } from './components/Counter_section';
import { SliderFirst } from './components/SliderFirst';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero_sec />
      <Counter_section />
      <SliderFirst />
    </div>
  )
}

export default App
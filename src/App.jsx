import React from 'react'
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Hero_sec } from './components/Hero_sec';
import { Counter_section } from './components/Counter_section';
import { SliderFirst } from './components/SliderFirst';
import { SliderSecond } from './components/SliderSecond';
import { HowPlay } from './components/HowPlay';
import { Features } from './components/Features';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero_sec />
      <Counter_section />
      <SliderFirst />
      <SliderSecond />
      <HowPlay />
      <Features />
    </div>
  )
}

export default App
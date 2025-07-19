import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Portfolio from './routes/Portfolio'
import Contact from './routes/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Background from "./components/Background"
import { Routes, Route } from 'react-router-dom';
import ThreeScene from './components/ThreeScene'

/*
function App() {
  useEffect(() => {
    document.title = "Vincent Nguyen"; //Tab title
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
*/

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ThreeScene />
    </div>
  )
}

export default App

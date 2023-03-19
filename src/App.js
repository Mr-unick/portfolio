
import './App.css';
import Home from './components/home/home';
import { BrowserRouter,Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Skills from './components/skills/skills';
import TemporaryDrawer from './components/navbar/new';
import Btn from './components/btn/btn';
import { useState } from 'react';



function App() {
  const[close,setclose]=useState(false)
  const location=window.location;
  return (

    
  
    <div>
  
      <BrowserRouter>
      <TemporaryDrawer location={location}/>
     <Btn/>
     
    <Routes>
      
    <Route path="/" element={<Home close={close} setclose={setclose}/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/skills" element={<Skills />}/>
    <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

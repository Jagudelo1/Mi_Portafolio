import React from 'react';
import './css/main.css';
import HomeApp from './HomeApp';
import { Route, Routes } from 'react-router-dom';
import { About } from './About';
import { NavbarApp } from './components/NavbarApp';
import { Proyects } from './Proyects';
import { Proyecto1 } from './components/Proyecto1';
import { Proyecto2 } from './components/Proyecto2';
import { Proyecto3 } from './components/Proyecto3';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeApp/>}/>
        <Route path='/Sobre_Mi' element={<About/>}/>
        <Route path='/Mi_Portafolio' element={<NavbarApp/>}/>
        <Route path='/Proyectos' element={<Proyects/>} />
        <Route path='/Proyectos/Api_StarWars' element={<Proyecto1/>} />
        <Route path='/Proyectos/BonAppetit' element={<Proyecto2/>} />
        <Route path='/Proyectos/PelisBro' element={<Proyecto3/>} />
      </Routes>
    </div>
  )
}

export default App
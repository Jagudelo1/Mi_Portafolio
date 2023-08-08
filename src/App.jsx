import React from 'react';
import './css/main.css';
import HomeApp from './HomeApp';
import { Route, Routes } from 'react-router-dom';
import { About } from './About';
import { NavbarApp } from './components/NavbarApp';
import { Proyects } from './Proyects';
import { ProyectsApp } from './components/ProyectsApp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeApp/>}/>
        <Route path='/Sobre_Mi' element={<About/>}/>
        <Route path='/Mi_Portafolio' element={<NavbarApp/>}/>
        <Route path='/Proyectos' element={<Proyects/>} />
        <Route path='/Proyectos/Api_StarWars' element={<ProyectsApp/>} />
      </Routes>
    </div>
  )
}

export default App
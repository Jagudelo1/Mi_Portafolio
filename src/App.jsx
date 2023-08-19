import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeApp } from "./components/HomeApp";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Proyectos } from "./components/Proyectos";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeApp/>}/>
        <Route path='/Mi_Portafolio' element={<Navbar/>}/>
        <Route path='/Sobre_Mi' element={<About/>}/>
        <Route path='/Proyectos' element={<Proyectos/>}/>
      </Routes>
    </>
  )
}

export default App

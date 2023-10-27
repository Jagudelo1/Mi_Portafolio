import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeApp } from "./components/HomeApp";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeApp/>}/>
        <Route path="/Sobre_Mi" element={<HomeApp/>}/>
        <Route path="/Proyectos" element={<HomeApp/>}/>
        <Route path="/Contácteme" element={<HomeApp/>}/>
      </Routes>
    </>
  )
}

export default App
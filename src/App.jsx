import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { HomeApp } from './components/HomeApp';
import { AboutApp } from './components/AboutApp/AboutApp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeApp/>}/>
        <Route path='/Sobre_Mi' element={<AboutApp/>} />
      </Routes>
    </>
  )
}

export default App

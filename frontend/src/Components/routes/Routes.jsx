import React from 'react'
import { Routes,Route, Navigate } from 'react-router'
import Home from '../../pages/Home'
import Create from '../../pages/Create'
import Help from '../../pages/Help'

const Routes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/Help' element={<Help/>}/>
      </Routes>
    </>
  )
}

export default Routes

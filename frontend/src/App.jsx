import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {
  return (
    <>
     <Navbar/>
     <div className="d-flex justify-content-around flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div> 
    </>
  )
}

export default App

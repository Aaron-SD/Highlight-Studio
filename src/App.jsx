import { Routes, Route} from "react-router-dom";
import Homelayout from "./Layout/Homelayout";
import Home from "./components/Home";
import { useState } from 'react'
import './App.css'

function App() {
 

  return (
 
    <div style={{ overflow: "hidden" }}>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
   
  )
}

export default App

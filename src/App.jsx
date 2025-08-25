// import {Home} from './Page/Home.jsx'

import './App.css'
import  Home from './Page/Home.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <h1 className="text-2xl text-red-200">djdjdjdjd</h1> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </>
  )
}

export default App;

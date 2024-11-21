import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
function App() {
 
  return (
    <>
<Router>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}></Route>
  </Routes>
</Router>
    </>
  )
}

export default App

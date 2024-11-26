import {useEffect,useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import PrivateRoute from './PrivateRoutes'
import AdminSidebar from './pages/AdminSidebar'

function App() {
  const [token, setToken] = useState(localStorage.getItem("AccessToken"));

  useEffect(() => {
    
    const handleStorageChange = () => {
      setToken(localStorage.getItem("AccessToken"));
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
<Router>
  <Routes>
    <Route path='/' element={token?(<Home/>):(<Login/>)}/>
    <Route path='/admin' element={token?(<AdminSidebar/>):(<Login/>)}/>
    <Route path='/home' element={
      <PrivateRoute>
      <Home/></PrivateRoute>
    }/>
    <Route path='/signup' element={token?(<Home/>):(<Signup/>)}></Route>
  </Routes>
</Router>
    </>
  )
}

export default App

import {useEffect,useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import PrivateRoute from './PrivateRoutes'
import AdminSidebar from './pages/AdminSidebar'
import { Navigate } from 'react-router-dom'
import DashboardA from './components/DashboardA'
import User from './components/User'
import Orders from './pages/Orders'
import Products from './components/Products'
import NotFound from './components/NotFound'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Product from './pages/Product'
import Cart from './pages/Cart'
const queryClient = new QueryClient()

function App() {
  const [token, setToken] = useState(localStorage.getItem("AccessToken"));
  const role=localStorage.getItem("role")
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
    <QueryClientProvider client={queryClient}>
<Router>
  <Routes>
    {/* <Route path='/' element={token?((role=="user")?(<Home/>):(<AdminSidebar/>)):(<Login/>)}/> */}

<Route 
  path="/" 
  element={
    token 
      ? (role === "user" 
          ? <Home /> 
          : <AdminSidebar />) 
      :<Login/>
  }
/>

    <Route path='/admin/user' element={(token&&role=="admin")?(<User/>):(<Login/>)}/>
    <Route path='/home' element={
     (role=="user")?
     (<PrivateRoute>
        <Home/></PrivateRoute>):<PrivateRoute>
        <AdminSidebar/>
        </PrivateRoute>
    }/>
    <Route path='/signup' element={
    token 
      ? (role === "user" 
          ? <Home /> 
          : <AdminSidebar />) 
      :<Signup/>
  }></Route>
     <Route path='/viewallproduct' element={<Product/>}/>
         
<Route path='/admin/dashboard' element={<DashboardA/>}/>
<Route path='/admin/orders' element={<Orders/>}/>
<Route path='/admin/product' element={<Products/>}/>
<Route path='*' element={<NotFound/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>

  </Routes>
</Router>
    </QueryClientProvider>
  )
}

export default App


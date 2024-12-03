// import React from 'react'
// import Navbar from '../components/Navbar'

// export default function AdminSidebar() {
//   return (
//     <div>
//         <Navbar/>
//         this is AdminSidebar
      
//     </div>
//   )
// }
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaBox, FaChartBar, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa'; 
import '../assets/css/AdminSidebar.css'; 
import NavbarAdmin from '../components/NavbarAdmin';
import { useDispatch } from 'react-redux';
import { deleteuser } from '../app/reducers/UserSlice';


const AdminSidebar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  ;
    const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    console.log("token removed");
    window.dispatchEvent(new Event("storage"));
   dispatch(deleteuser())
    navigate("/");
  };

  return (
    <>
    <NavbarAdmin/>
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
      
          <li>
            <Link to="/admin/user" className="nav-link">
              <FaUsers className="sidebar-icon" /> Users
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard" className="nav-link">
              <FaTachometerAlt className="sidebar-icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/product" className="nav-link">
              <FaBox className="sidebar-icon" /> Products
            </Link>
          </li>
        
          <li>
            <Link to="/admin/orders" className="nav-link">
              <FaShoppingCart className="sidebar-icon" /> Orders {/* Changed icon to FaShoppingCart */}
            </Link>
          </li>
          <li>
            <button  className="nav-link" onClick={handleLogout}>
              <FaSignOutAlt className="sidebar-icon" /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside></>
  );
};

export default AdminSidebar;

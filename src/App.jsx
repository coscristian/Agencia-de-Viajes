import './styles/App.css';
import Index from 'pages/index'
import SucursalAdmin from 'pages/sucursal_admin';
import Layout from 'layouts/Layout';
import Sucursales from 'pages/sucursales';
import Hotels from 'pages/hotels';
import Admins from 'pages/admins';
import Sellers from 'pages/sellers';
import Customers from 'pages/customers';
import Profile from 'pages/profile';
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import PrivateLayout from 'layouts/PrivateLayout';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/admin" element={<PrivateLayout />}>
                <Route path='/admin' element={<Index />} />
                <Route path="suc_admins" element={<Admins />}>
                  <Route path="profile" element={<Profile />}/>  
                </Route>
                <Route path="sucursales" element={<Sucursales />}/>
                <Route path="hotels" element={<Hotels />}/>
                <Route path="sellers" element={<Sellers />}/>
                <Route path="customers" element={<Customers />}/>     
                            
            </Route> 
            
            <Route path="/admin_sucursal" element={<SucursalAdmin />}/>
            
          </Routes>        
      </Router>
    </div>
  );
}

export default App;

/**
 * 
 *             <Route path="/admin" element={<PrivateLayout />} > 
                  <Route index element={<Admins/>}/> 
                  <Route path="profile" element={<Profile/>}/> 
            </Route>
 */
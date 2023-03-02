import './styles/App.css';
import Index from 'pages/index'
import SucursalAdmin from 'pages/sucursal_admin';
import Layout from 'layouts/Layout';
import Sucursales from 'pages/sucursales';
import Hoteles from 'pages/hoteles';
import Admins from 'pages/admins';
import Sellers from 'pages/sellers';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' element={<Index />} />
                <Route path="/sucursales" element={<Sucursales />}/>
                <Route path="/hoteles" element={<Hoteles />}/>
                <Route path="/admins" element={<Admins />}/>
                <Route path="/sellers" element={<Sellers />}/>
            </Route> 
            
            <Route path="/admin_sucursal" element={<SucursalAdmin />}/>
          </Routes>        
      </Router>
    </div>
  );
}

export default App;

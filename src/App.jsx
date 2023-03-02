import './styles/App.css';
import Index from 'pages/index'
import SucursalAdmin from 'pages/sucursal_admin';
import Layout from 'layouts/Layout';
import Sucursales from 'pages/sucursales';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Hoteles from 'pages/hoteles';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' element={<Index />} />
                <Route path="/sucursales" element={<Sucursales />}/>
                <Route path="/hoteles" element={<Hoteles />}/>
            </Route> 
            
            <Route path="/admin_sucursal" element={<SucursalAdmin />}/>
          </Routes>        
      </Router>
    </div>
  );
}

export default App;

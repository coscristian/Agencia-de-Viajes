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


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} /> 
            <Route path="/sucursales" element={<Sucursales />}/>
            <Route path="/admin_sucursal" element={<SucursalAdmin />}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

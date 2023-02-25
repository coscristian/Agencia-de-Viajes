import './styles/App.css';
import Index from 'pages/index'
import SucursalAdmin from 'pages/sucursal_admin';
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
          <Route path="/" element={<Index />} /> 
          <Route path="/admin_sucursal" element={<SucursalAdmin />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import airplane from 'media/airplane.png';
import adminIcon from 'media/admin_icon.webp';

function SucursalAdmin() {
    return (
        <div>
            <header>
                <ul>
                    <li><img className="logo" src={airplane} alt="Logo ViajaYa" /></li>
                    <li><a href="#">Vendedores</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Administrador Sucursal Pereira</a></li>
                    <li><img className="admin-icon" src={adminIcon} alt="Logo Admin" /></li>
                </ul>
            </header>
        </div>
    );
}

export default SucursalAdmin;
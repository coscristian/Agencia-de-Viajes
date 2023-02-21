import airplane from 'media/airplane.png';
import adminIcon from 'media/admin_icon.webp';
function Index() {
    return (
        <div>
            <header>
                <ul>
                    <li><img class="logo" src={airplane} alt="Logo ViajaYa" /></li>
                    <li><a href="#">Sucursales</a></li>
                    <li><a href="#">Hoteles</a></li>
                    <li><a href="#">Administradores</a></li>
                    <li><a href="#">Vendedores</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><img class="admin-icon" src={adminIcon} alt="Logo Admin" /></li>
                </ul>
            </header>
        </div>
    );
}

export default Index;
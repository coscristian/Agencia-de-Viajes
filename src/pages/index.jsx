import airplane from 'media/airplane.png';
import adminIcon from 'media/admin_icon.webp';

function Index() {
    return (
        <div>
            <header>
                <ul>
                    <li><img class="logo" src={airplane} alt="Logo ViajaYa" /></li>
                    <h2 class="title">ViajaYa</h2>
                    <li><img class="admin-icon" src={adminIcon} alt="Logo Admin" /></li>
                </ul>
            </header>
            <ul>
                <li><a href="#">Sucursales</a></li>
                <li><a href="#">Hoteles</a></li>
                <li><a href="#">Administradores</a></li>
                <li><a href="#">Vendedores</a></li>
                <li><a href="#">Clientes</a></li>
            </ul>
        </div>
    );
}

export default Index;
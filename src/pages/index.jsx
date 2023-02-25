import airplane from 'media/airplane.png';
import adminIcon from 'media/admin_icon.webp';

/*
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  background-color: #003580;
  color: white;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
}
*/

function Index() {
    return (
        <div>
            <header className='bg-blue-800 flex flex-row justify-between'>
                <div className='flex flex-row'>
                    <img className='w-16 ml-4 mr-2' src={airplane} alt="Logo ViajaYa" />
                    <h1 class="title self-center text-white">ViajaYa</h1>
                </div>
                <div className='flex flex-row'>
                    <a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Sucursales</a>
                    <a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Hoteles</a>
                    <a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Administradores</a>
                    <a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Vendedores</a>
                    <a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Clientes</a>
                    <div className='self-center p-5 text-white font-bold'>ADMIN</div>
                    <img class="w-12 mr-5 ml-5" src={adminIcon} alt="Logo Admin" />
                </div>
            </header>
        </div>
    );
}

export default Index;

/*
<ul>
    <li><a href="#">Sucursales</a></li>
    <li><a href="#">Hoteles</a></li>
    <li><a href="#">Administradores</a></li>
    <li><a href="#">Vendedores</a></li>
    <li><a href="#">Clientes</a></li>
</ul> */
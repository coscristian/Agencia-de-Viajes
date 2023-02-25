import airplane from 'media/airplane.png';
import adminIcon from 'media/admin_icon.webp';
import sucursal from 'media/sucursal.svg';

function Index() {
    return (
        <div>
            <header className='bg-blue-800 flex flex-row justify-between border-b-2'>
                <div className='flex flex-row'>
                    <img className='w-16 ml-4 mr-2' src={airplane} alt="Logo ViajaYa" />
                    <h1 class="title self-center text-white">ViajaYa</h1>
                </div>
                <div className='flex flex-row px-4 hover:bg-blue-900'>
                    <div className='self-center pr-2 text-white font-bold'>ADMIN</div>
                    <img class="self-center w-10 h-10 rounded-full" src="https://flowbite.com/application-ui/demo/images/users/neil-sims.png" alt="Logo Admin" />
                </div>
            </header>
            <div className='flex flex-row bg-blue-900'>
                <div className='flex flex-col text-white py-3 pl-6 pr-14 bg-blue-800 border-r-2 h-screen'>
                    <ul>
                        <li className='py-2'>Sucursales</li>
                        <li className='py-2'>Hoteles</li>
                        <li className='py-2'>Administradores</li>
                        <li className='py-2'>Vendedores</li>
                        <li className='py-2'>Clientes</li>
                        <hr></hr>
                        <li className='py-2'>Docs</li>
                        <li className='py-2'>Lorem</li>
                        <li className='py-2'>Ayuda</li>
                    </ul>
                </div>
                <div className='grid grid-cols-3 w-full py-4 px-4 gap-2 text-center'>
                    <div className='col-span-3 bg-blue-300'>Cuadro 1</div>
                    <div className='bg-blue-300'>Cuadro 2</div>
                    <div className='bg-blue-300'>Cuadro 3</div>
                    <div className='bg-blue-300'>Cuadro 4</div>
                    <div className='bg-blue-300 col-span-3'>Cuadro 5</div>
                    <div className='bg-blue-300 col-span-2'>Cuadro 6</div>
                    <div className='bg-blue-300'>Cuadro 7</div>
                </div>
            </div>
            
        </div>
    );
}

export default Index;


/**
 <div className='flex flex-row '>
<a href="#" className='bg-blue-900 font-semibold self-center p-5 hover:bg-blue-900 text-white'>Inicio</a>
<a href="#" className='self-center p-5 hover:bg-blue-900 text-white '>Sucursales</a>
<a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Hoteles</a>
<a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Administradores</a>
<a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Vendedores</a>
<a href="#" className='self-center p-5 hover:bg-blue-900 text-white'>Clientes</a>
<div className='flex flex-row px-4 hover:bg-blue-900'>
    <div className='self-center text-white font-bold'>ADMIN</div>
    <img class="w-12" src={adminIcon} alt="Logo Admin" />
</div>
</div> 
 */
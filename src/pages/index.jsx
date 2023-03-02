import Sidebar from 'components/Sidebar';
import {Link} from 'react-router-dom';

function Index() {
    return (
        <div>
            <div className='flex flex-row bg-blue-900'>
                <div className='flex flex-col text-white py-3   bg-blue-800 border-r-2 h-screen'>
                    <Sidebar>
                        <Link to="/sucursales">
                            <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Sucursales</li>
                        </Link>
                        <Link to="/hoteles">
                            <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Hoteles</li>
                        </Link>
                        <Link to="/admins">
                            <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Administradores</li>
                        </Link>
                        <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Vendedores</li>
                        <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Clientes</li>
                    </Sidebar>
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

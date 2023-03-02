import React from 'react';
import admin1 from 'media/admin1.png';
import admin2 from 'media/admin2.jpg';
import admin3 from 'media/admin3.jpeg';
import admin4 from 'media/admin4.jpg';
import SucursalCard from 'components/SucursalCard';
import Sidebar from 'components/Sidebar';

const Admins = () => {
  return (
    <div className='flex flex-row bg-gray-100'>
        <Sidebar>
            <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Filter by</li>
            <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Order by</li>
        </Sidebar>
        <div className="flex flex-col my-5 w-full justify-center items-center">
            <h2 className="text-2xl my-5 font-sans font-bold">Available Admins</h2>
            <div className="grid grid-cols-3 gap-2">
                <SucursalCard titulo="Juan Carlos Ramirez" img={admin2} etiqueta1="Pereira" etiqueta2="Risaralda"/>
                <SucursalCard titulo="Andrea Gallardo" img={admin1} etiqueta1="Medellín" etiqueta2="Antioquía"/>
                <SucursalCard titulo="Camilo Perez" img={admin4} etiqueta1="Bogotá" etiqueta2="Cundinamarca"/>
                <SucursalCard titulo="Camila Montoya" img={admin3} etiqueta1="Villavicencio" etiqueta2="Meta"/>
                <SucursalCard titulo="Camila Montoya" img={admin3} etiqueta1="Villavicencio" etiqueta2="Meta"/>
                <SucursalCard titulo="Camila Montoya" img={admin3} etiqueta1="Villavicencio" etiqueta2="Meta"/>
                <SucursalCard titulo="Camila Montoya" img={admin3} etiqueta1="Villavicencio" etiqueta2="Meta"/>


            </div>
        </div>            
    </div>
  );
}

export default Admins;
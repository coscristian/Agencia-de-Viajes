import React from 'react';
import hotel from 'media/hotel.jpg';
import hotel2 from 'media/hotel2.jpg';
import SucursalCard from 'components/SucursalCard';
import Sidebar from 'components/Sidebar';

const Hoteles = () => {
  return (
    <div className='flex flex-row bg-gray-100'>
        <Sidebar>
            <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Filtrar</li>
            <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Ordenar por</li>
        </Sidebar>
        <div className="flex flex-col mx-5 my-5 w-full">
            <h2 className="text-2xl font-sans font-bold">Hoteles Disponibles</h2>
            <div className="grid grid-cols-3 gap-2">
                <SucursalCard titulo="Cali" img={hotel2} etiqueta1="Feria" etiqueta2="Valle"/>
                <SucursalCard titulo="Pereira" img={hotel} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
                <SucursalCard titulo="Cali" img={hotel2} etiqueta1="Feria" etiqueta2="Valle"/>
                <SucursalCard titulo="Pereira" img={hotel} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
            </div>
        </div>            
    </div>
  )
}

export default Hoteles;
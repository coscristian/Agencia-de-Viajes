import Sidebar from "components/Sidebar";
import SucursalCard from "components/SucursalCard";
import pereira from "media/pereira.jpg";
import cali from "media/cali.jpg";

function Sucursales() {
    return (
        <div className='flex flex-row bg-gray-100'>
            <Sidebar>
                <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Filtrar por</li>
                <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Ordenar por</li>
            </Sidebar>
            <div className="flex flex-col mx-5 my-5 w-full">
                <h2 className="text-2xl font-sans font-bold">Sucursales Disponibles</h2>
                <div className="grid grid-cols-3 gap-2">
                    <SucursalCard titulo="Cali" img={cali} etiqueta1="Feria" etiqueta2="Valle"/>
                    <SucursalCard titulo="Pereira" img={pereira} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
                    <SucursalCard titulo="Pereira" img={pereira} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
                    <SucursalCard titulo="Pereira" img={pereira} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
                    <SucursalCard titulo="Pereira" img={pereira} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
                    <SucursalCard titulo="Pereira" img={pereira} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
                    <SucursalCard titulo="Pereira" img={pereira} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
                    <SucursalCard titulo="Pereira" img={pereira} etiqueta1="Risaralda" etiqueta2="Cafetero"/>
                    <SucursalCard titulo="Cali" img={cali} etiqueta1="Feria" etiqueta2="Valle"/>

                </div>
            </div>            
        </div>
    );
}

export default Sucursales;
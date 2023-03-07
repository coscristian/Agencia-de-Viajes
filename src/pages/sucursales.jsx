import Sidebar from "components/Sidebar";
import SucursalCard from "components/SucursalCard";
import pereira from "media/pereira.jpg";
import cali from "media/cali.jpg";

function Sucursales() {
    return (
        <div className='flex flex-row bg-gray-100'>
            <Sidebar>
                <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Filter by</li>
                <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Order By</li>
            </Sidebar>
            <div className="flex flex-col my-5 w-full">
                <div className="flex justify-between mx-5">
                    <h2 className="text-2xl text-gray-800 font-sans my-5 font-bold">Sucursales Disponibles</h2>
                    <button type="button" class="px-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-bold  rounded-lg text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">
                        Add
                    </button>
                </div>
                
                <div className="grid grid-cols-3 gap-16 ">
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
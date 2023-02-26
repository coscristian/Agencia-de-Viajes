import SucursalesSideBar from "components/SucursalesSideBar";

function Sucursales(props) {
    return (
        <div className='flex flex-row bg-gray-100'>
            <SucursalesSideBar />
            <div className="flex flex-col mx-5 my-5 w-11/12">
                <h2 className="text-2xl font-sans font-bold">Sucursales Disponibles</h2>
                <div className="grid grid-cols-3 gap-2">
                    <div className="bg-red-500 p-5">A</div>
                    <div className="bg-red-500 p-5">A</div>
                </div>
            </div>            
        </div>
    );
}

/*
const sucursales = () => {
    return (
        <div>
            
        </div>
    );
}
*/
export default Sucursales;
import edit from "media/edit.png";
import deleteImg from "media/delete.png";

const SucursalCard = (props) => {
    return (
        <div className="max-w-sm shadow-lg rounded">
            <img className="h-60 w-full" src={props.img} />            
            <div className="flex text-left text-gray-700 font-semibold text-xl px-6 pt-4">
                <h2 className="">{props.titulo}</h2>
                <button type="button" class="mx-3 p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <img width="20" src={edit}></img>                    
                </button>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    <img width="25" src={deleteImg}></img>
                </button>
            </div>
            
            <div className="flex flex-row gap-4 text-gray-900 px-6 py-4">
                <div className="font-semibold bg-gray-200 rounded-md px-3 text-sm">#{props.etiqueta1}</div>
                <div className="font-semibold bg-gray-200 rounded-md px-3 text-sm">#{props.etiqueta2}</div>
            </div>
        </div>
    );
}

export default SucursalCard;
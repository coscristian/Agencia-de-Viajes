
const SucursalCard = (props) => {
    return (
        <div className="max-w-sm shadow-lg rounded">
            <img className="w-full" src={props.img} />            
            <h2 className="text-left text-gray-700 font-semibold text-xl px-6 pt-4">{props.titulo}</h2>
            <div className="flex flex-row gap-4 text-gray-900 px-6 py-4">
                <div className="font-semibold bg-gray-200 rounded-md px-3 text-sm">#{props.etiqueta1}</div>
                <div className="font-semibold bg-gray-200 rounded-md px-3 text-sm">#{props.etiqueta2}</div>
            </div>
        </div>
    );
}

export default SucursalCard;
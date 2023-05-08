import { useState } from "react";

const SellerRow = ({ entity, setShowTable }) => {
  const data = Object.values(entity);
  console.log(data);
  const [editar, setEditar] = useState(false);

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {editar ? (
        <>
          <td>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={data[0]}
            />
          </td>
          <td>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={data[1]}
            />
          </td>
          <td>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={data[2]}
            />
          </td>
          <td>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={data[3]}
            />
          </td>
          <td>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={data[4]}
            />
          </td>
        </>
      ) : (
        data.map((value) => {
          if (value === true) {
            return (
              <td class="px-6 py-4">
                <span class="flex w-3 h-3 bg-green-500 rounded-full"></span>
              </td>
            );
          } else if (value === false) {
            return (
              <td class="px-6 py-4">
                <span class="flex w-3 h-3 bg-red-500 rounded-full"></span>
              </td>
            );
          }
          return <td class="px-6 py-4">{value}</td>;
        })
      )}

      <td class="px-6 py-4 text-right">
        <a
          onClick={() => {
            // Aquí mostrar modal con informacion de la asignacion del trabajo
            setShowTable(false);
          }}
          href="#"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Ver
        </a>
      </td>

      <td class="">
        <div className="flex w-full justify-around">
          {editar ? (
            <button type="submit">
              <i
                onClick={() => setEditar(!editar)}
                className="fas fa-check text-green-400 hover:text-green-800"
              />
            </button>
          ) : (
            <i
              onClick={() => setEditar(!editar)}
              className="fas fa-pencil-alt text-yellow-300 hover:text-yellow-500"
            />
          )}
          <i className="fas fa-trash text-red-500 hover:text-red-700" />
        </div>
      </td>
    </tr>
  );
};

export default SellerRow;
